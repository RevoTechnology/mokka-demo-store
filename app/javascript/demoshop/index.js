const Demoshop = {
    initialized: false,
    components: {},
    autoInitComponents: true,
    attachComponents: function (container) {
        Demoshop.components.popupLoader.useContainer(container);
        Demoshop.components.inputMasks.useContainer(container);
        Demoshop.components.rangeValues.useContainer(container);
        Demoshop.components.popupForms.useContainer(container);
        Demoshop.components.localForm.useContainer(container);
        Demoshop.components.decrementTimeout.useContainer(container);
    }
}

Demoshop.components.popupLoader = {
    initialized: false,
    selector: "[data-popup]",
    container: undefined,
    control: undefined,
    wrapper: undefined,
    elements: [],
    init: function () {
        this.container = document.getElementById("main-popup");
        this.wrapper = document.getElementById("main-popup-wrapper");
        this.control = document.getElementById("main-popup-control")
        this.useContainer(document);
        this.initialized = true;
    },
    useContainer: function (container) {
        container.querySelectorAll(this.selector).forEach(this.apply);
    },
    apply: function (element) {
        const component = Demoshop.components.popupLoader;
        component.elements.push(element);
        element.addEventListener("click", component.handle);
    },
    handle: function (event) {
        event.preventDefault();

        const component = Demoshop.components.popupLoader;
        const element = event.target.closest(component.selector);
        const url = element.getAttribute("data-popup");
        component.load(url);
    },
    load: function (url) {
        this.control.checked = true;
        const request = Biovision.jsonAjaxRequest("get", url, this.processResponse, this.closePopup);
        request.send();
    },
    processResponse: function () {
        const component = Demoshop.components.popupLoader;
        const response = JSON.parse(this.responseText);
        if (response.hasOwnProperty("meta")) {
            const meta = response.meta;
            if (meta.hasOwnProperty("content")) {
                component.updateContent(meta.content);
            } else {
                component.updateContent("");
            }
            if (meta.hasOwnProperty("faq")) {
                component.updateFaq(meta.faq);
            } else {
                component.updateFaq("");
            }
            if (meta.hasOwnProperty("components")) {
                const container = component.container.querySelector(".content");
                meta.components.forEach(key => component.useComponent(key, container))
            }
            if (meta.hasOwnProperty("max_width")) {
                component.wrapper.style.setProperty("--max-width", meta.max_width);
            } else {
                component.wrapper.style.removeProperty("--max-width");
            }
        }
    },
    closePopup: function () {
        const component = Demoshop.components.popupLoader;
        component.control.checked = false;
    },
    updateContent: function (newContent) {
        const component = Demoshop.components.popupLoader;
        const container = component.container.querySelector(".content");
        container.innerHTML = newContent;
        Demoshop.attachComponents(container);
    },
    updateFaq: function (newContent) {
        const component = Demoshop.components.popupLoader;
        const container = component.container.querySelector(".faq-container");
        container.innerHTML = newContent;
    },
    useComponent: function (key, container) {
        if (Demoshop.components.hasOwnProperty(key)) {
            Demoshop.components[key].useContainer(container);
        }
    }
}

Demoshop.components.popupForms = {
    initialized: false,
    selector: ".js-popup-form",
    forms: [],
    init: function () {
        this.useContainer(document);
        this.initialized = true;
    },
    useContainer: function (container) {
        container.querySelectorAll(this.selector).forEach(this.apply);
    },
    apply: function (form) {
        const component = Demoshop.components.popupForms;
        component.forms.push(form);
        form.addEventListener("submit", component.handle);
    },
    handle: function (event) {
        event.preventDefault();
        const form = event.target;
        Demoshop.components.popupLoader.load(form.action);
    }
}

Demoshop.components.inputMasks = {
    initialized: false,
    selector: '[data-mask]',
    items: [],
    init: function () {
        this.useContainer(document);
        this.initialized = true;
    },
    useContainer: function (container) {
        const component = Demoshop.components.inputMasks;
        container.querySelectorAll(component.selector).forEach(component.apply);
    },
    apply: function (element) {
        const component = Demoshop.components.inputMasks;
        component.items.push(new IMask(element, {mask: element.getAttribute("data-mask")}))
    }
}

Demoshop.components.rangeValues = {
    initialized: false,
    selector: "input[data-value]",
    items: [],
    init: function () {
        this.useContainer(document);
        this.initialized = true;
    },
    useContainer: function (container) {
        container.querySelectorAll(this.selector).forEach(this.apply);
    },
    apply: function (element) {
        const component = Demoshop.components.rangeValues;
        component.items.push(element);
        element.addEventListener("input", component.handle);
    },
    handle: function (event) {
        const element = event.target;
        const containerId = element.getAttribute("data-value");
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = element.value;
        }
    }
}

Demoshop.components.autoPopup = {
    initialized: false,
    selector: ".js-auto-popup",
    init: function () {
        document.querySelectorAll(this.selector).forEach(this.apply);
        this.initialized = true;
    },
    apply: function (element) {
        const url = element.getAttribute("data-popup");
        Demoshop.components.popupLoader.load(url);
    }
}

Demoshop.components.quantitySelector = {
    selector: ".quantity-selector button",
    buttons: [],
    init: function () {
        document.querySelectorAll(this.selector).forEach(this.apply);
    },
    apply: function (element) {
        const component = Demoshop.components.quantitySelector;
        component.buttons.push(element);
        element.addEventListener("click", component.handle);
    },
    handle: function (event) {
        const button = event.target;
        const field = button.parentNode.querySelector("input");
        const delta = button.classList.contains("increment") ? 1 : -1;
        field.value = String(parseInt(field.value) + delta);
        if (parseInt(field.value) < 1) {
            field.value = "1";
        }
    }
}

Demoshop.components.localForm = {
    selector: ".js-local-form",
    forms: [],
    init: function () {
        this.useContainer(document);
    },
    useContainer: function (container) {
        container.querySelectorAll(this.selector).forEach(this.apply);
    },
    apply: function (form) {
        const component = Demoshop.components.localForm;
        component.forms.push(form);
        form.addEventListener("submit", component.handle);
    },
    handle: function (event) {
        event.preventDefault();
        console.log('Yep')
        const component = Demoshop.components.localForm;
        const form = event.target;
        component.load(form.action, form.closest(".js-local-container"));
    },
    load: function (url, container) {
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                const component = Demoshop.components.localForm;
                if (response.hasOwnProperty("meta")) {
                    const meta = response.meta;
                    if (meta.hasOwnProperty("content")) {
                        component.updateContent(container, meta.content);
                        container.scrollIntoView();
                    } else {
                        component.updateContent(container, "");
                    }
                }

            })
    },
    updateContent: function (container, newContent) {
        container.innerHTML = newContent;
        Demoshop.attachComponents(container);
    }
}

Demoshop.components.cartButton = {
    initialized: false,
    cart: undefined,
    selector: ".js-cart-button",
    buttons: [],
    init: function () {
        this.cart = document.getElementById("header-cart");
        if (this.cart) {
            this.initialized = true;
            document.querySelectorAll(this.selector).forEach(this.apply);
        }
    },
    apply: function (element) {
        const component = Demoshop.components.cartButton;
        component.buttons.push(element);
        element.addEventListener("click", component.handle);
    },
    handle: function (event) {
        const component = Demoshop.components.cartButton;
        const button = event.target;
        let delta = 1;
        let quantity = component.cart.getAttribute("data-count");
        if (quantity === "") {
            quantity = 0;
        }

        if (button.hasAttribute("data-count")) {
            const counter = document.getElementById(button.getAttribute("data-count"));

            if (counter) {
                delta = parseInt(counter.value);
            }
        }

        component.cart.setAttribute("data-count", String(delta + parseInt(quantity)));
    }
}

Demoshop.components.sidebarState = {
    control: undefined,
    init: function () {
        this.control = document.getElementById("sidebar-control");
        const handler = this.handle;
        if (this.control) {
            this.control.addEventListener("change", handler)
        }
    },
    handle: function (event) {
        const checkbox = event.target;
        if (checkbox.checked) {
            document.cookie = "sb=1"
        } else {
            document.cookie = "sb=; expires=Thu, 01 Jan 1970 00:00:00 GMT"
        }
    }
}

Demoshop.components.highlighter = {
    items: [],
    selector: "[data-highlight]",
    className: "data-highlight",
    current: undefined,
    init: function () {
        document.querySelectorAll(this.selector).forEach(this.apply);
    },
    apply: function (element) {
        const component = Demoshop.components.highlighter;
        if (element.getAttribute("data-highlight").length > 0) {
            component.items.push(element);
            element.addEventListener("mouseenter", component.mouseIn);
            element.addEventListener("mouseleave", component.mouseOut);
        }
    },
    mouseIn: function (event) {
        const component = Demoshop.components.highlighter;
        const element = event.target;
        if (element.matches(component.selector)) {
            element.getAttribute(component.className).split(",").forEach(id => component.toggle(element, id, true));
            component.current = element;
            window.setTimeout(component.checkScroll, 500, element);
        }
    },
    mouseOut: function (event) {
        const component = Demoshop.components.highlighter;
        const element = event.target;
        if (element.matches(component.selector)) {
            element.getAttribute(component.className).split(",").forEach(id => component.toggle(element, id, false));
        }
        component.current = undefined;
        window.setTimeout(component.hidePopup, 1000);
    },
    toggle: function (details, elementId, apply) {
        const element = document.getElementById(elementId);
        if (element) {
            if (apply) {
                element.classList.add("highlighted-item");
                Demoshop.components.highlighter.specialBehavior(details, element, elementId);
            } else {
                element.classList.remove("highlighted-item");
            }
        } else {
            console.log("No element :(")
        }
    },
    specialBehavior: function (details, element, elementId) {
        const component = Demoshop.components.highlighter;

        if (elementId === "header-authentication") {
            element.querySelector(".auth-info1").classList.remove("hidden");
            element.querySelector(".auth-info2").classList.add("hidden");
        }
        if (elementId === "mokka-info-button") {
            window.setTimeout(component.showPopup, 1000, details);
        }
        if (elementId === "main-popup-wrapper") {
            const checkbox = document.getElementById("main-popup-control");
            if (checkbox) {
                checkbox.checked = true;
            }
            if (details.hasAttribute("data-url")) {
                Demoshop.components.popupLoader.load(details.getAttribute("data-url"));
            }
        }
    },
    checkScroll: function (from) {
        const component = Demoshop.components.highlighter;
        if (component.current && from === component.current) {
            const elementId = component.current.getAttribute(component.className).split(",")[0];
            const element = document.getElementById(elementId);
            if (element) {
                const top = window.scrollY + element.getBoundingClientRect().top - 16;
                window.scrollTo(0, Math.max(0, top));
            }
        }
    },
    showPopup: function (element) {
        const component = Demoshop.components.highlighter;
        const watcher = Demoshop.components.popupWatcher;
        if (component.current === element) {
            watcher.control.checked = true;
        }
    },
    hidePopup: function () {
        const watcher = Demoshop.components.popupWatcher;
        if (!watcher.hover && watcher.control) {
            watcher.control.checked = false;
        }
    }
}

Demoshop.components.popupWatcher = {
    control: undefined,
    popup: undefined,
    hover: false,
    init: function () {
        this.popup = document.getElementById("mokka-item-popup");
        if (this.popup) {
            this.control = document.getElementById("mokka-info-control");
            this.popup.addEventListener("mouseenter", this.mouseIn);
            this.popup.addEventListener("mouseleave", this.mouseOut);
        }
    },
    mouseIn: function () {
        Demoshop.components.popupWatcher.hover = true;
    },
    mouseOut: function () {
        Demoshop.components.popupWatcher.hover = false;
    }
}

Demoshop.components.calculator = {
    payments: {
        credit: [],
        monthly: [],
        card: []
    },
    monthRange: undefined,
    percentRange: undefined,
    paymentSum: 6600,
    useContainer: function (container) {
        this.monthRange = container.querySelector("#range");
        this.percentRange = container.querySelector("#pay-percent-range");
        this.paymentSum = parseInt(container.querySelector(".mokka-payment-sum").innerHTML);
        this.pushElements(container, ".mokka-payment-sum", "credit");
        this.pushElements(container, ".mokka-payment-card", "card");
        this.pushElements(container, ".mokka-payment-monthly", "monthly");
        this.monthRange.addEventListener("input", this.handleChange);
        this.percentRange.addEventListener("input", this.handleChange);
    },
    pushElements: function (container, selector, type) {
        const component = Demoshop.components.calculator;
        container.querySelectorAll(selector).forEach(function (element) {
            if (component.payments.hasOwnProperty(type)) {
                component.payments[type].push(element);
            }
        });
    },
    handleChange: function () {
        const component = Demoshop.components.calculator;
        const months = parseInt(component.monthRange.value);
        const percent = 100 - parseInt(component.percentRange.value);
        const credit = component.paymentSum * percent / 100;
        const newCredit = credit.toFixed(2);
        const newCard = (component.paymentSum - credit).toFixed(2);
        const newMonthly = (credit / months).toFixed(2);
        component.setValue("credit", newCredit * 100 % 100 === 0 ? Math.round(newCredit) : newCredit);
        component.setValue("card", newCard * 100 % 100 === 0 ? Math.round(newCard) : newCard);
        component.setValue("monthly", newMonthly * 100 % 100 === 0 ? Math.round(newMonthly) : newMonthly);
    },
    setValue: function (key, newValue) {
        const component = Demoshop.components.calculator;
        if (component.payments.hasOwnProperty(key)) {
            component.payments[key].forEach(function (element) {
                element.innerHTML = newValue;
            });
        }
    },
}

Demoshop.components.decrementTimeout = {
    selector: "[data-decrement-timeout]",
    elements: new Map(),
    init: function () {
        this.useContainer(document);
    },
    useContainer: function (container) {
        const component = Demoshop.components.decrementTimeout;
        container.querySelectorAll(component.selector).forEach(component.apply);
    },
    apply: function (element) {
        const component = Demoshop.components.decrementTimeout;
        const data = {
            minValue: 0,
            timeout: 0,
            interval: parseInt(element.dataset.decrementTimeout),
            value: parseInt(element.innerHTML)
        }
        component.elements.set(element, data);
        data.timeout = window.setTimeout(component.change, data.interval, element);
    },
    change: function (element) {
        const component = Demoshop.components.decrementTimeout;
        if (component.elements.has(element)) {
            const data = component.elements.get(element);
            const value = parseInt(element.innerHTML);
            if (value > data.minValue) {
                element.innerHTML = value - 1;
                data.timeout = window.setTimeout(component.change, data.interval, element);
            }
        }
    }
}

Demoshop.components.sidebarWatcher = {
    details: [],
    control: undefined,
    buttons: [],
    init: function () {
        this.control = document.getElementById("sidebar-control");
        if (this.control) {
            this.control.addEventListener("change", this.watch);
        }
        const sidebar = document.querySelector(".sidebar-main");
        if (sidebar) {
            sidebar.querySelectorAll("details").forEach(this.addDetails);
            sidebar.querySelectorAll(".carousel-button").forEach(this.addButton);
        }
    },
    addDetails: function (element) {
        const component = Demoshop.components.sidebarWatcher;
        component.details.push(element);
    },
    addButton: function (element) {
        const component = Demoshop.components.sidebarWatcher;
        component.buttons.push(element);
        element.addEventListener("click", component.watch);
    },
    watch: function () {
        const component = Demoshop.components.sidebarWatcher;
        if (window.innerWidth < 991) {
            component.details.map(e => e.open = true);
        }
    }
}

Biovision.components.demoshop = Demoshop;
