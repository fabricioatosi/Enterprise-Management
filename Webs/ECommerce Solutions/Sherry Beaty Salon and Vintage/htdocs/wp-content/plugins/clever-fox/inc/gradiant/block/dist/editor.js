!(function () {
    "use strict";
    var a = wp.blocks,
        e = wp.i18n,
        s = wp.element,
        i = wp.data,
        n = wp.blockEditor,
        t = wp.components,
         r = {
            infos: wp.element.createElement(
                "svg",
                { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 512.013 512.013" },
                wp.element.createElement("path", {
                    fill: "#fe6601",
                    d:
                        "m469.481 127.589h-5.19c-3.068-10.775-7.354-21.113-12.802-30.887l3.689-3.69c4.221-4.219 6.544-9.846 6.544-15.845s-2.323-11.625-6.547-15.849l-24.58-24.551c-4.221-4.247-9.855-6.585-15.865-6.585-6.009 0-11.644 2.338-15.844 6.564l-3.685 3.685c-9.781-5.465-20.123-9.759-30.891-12.826v-5.189c.001-12.36-10.054-22.416-22.415-22.416h-34.752c-12.36 0-22.416 10.056-22.416 22.416v5.189c-10.766 3.066-21.114 7.361-30.915 12.83l-3.668-3.668c-4.223-4.247-9.857-6.585-15.866-6.584-6.009 0-11.643 2.339-15.843 6.564l-24.575 24.576c-4.221 4.219-6.544 9.846-6.544 15.845s2.323 11.625 6.543 15.844l3.688 3.689c-5.471 9.804-9.759 20.144-12.81 30.888h-5.209c-12.36 0-22.416 10.056-22.416 22.416v34.782c0 12.36 10.056 22.416 22.416 22.416h5.209c3.051 10.743 7.339 21.083 12.81 30.888l-3.688 3.689c-4.221 4.219-6.544 9.846-6.544 15.845 0 5.998 2.323 11.625 6.543 15.844l24.556 24.556c4.221 4.247 9.854 6.585 15.863 6.585h.001c6.009 0 11.644-2.338 15.845-6.564l3.688-3.689c9.811 5.474 20.159 9.763 30.915 12.813v5.207c0 12.36 10.056 22.416 22.416 22.416h34.752c12.36 0 22.416-10.056 22.416-22.416v-5.207c10.759-3.051 21.099-7.338 30.891-12.809l3.664 3.664c4.221 4.247 9.855 6.585 15.864 6.585 6.01 0 11.645-2.339 15.841-6.56l24.608-24.581c4.22-4.22 6.543-9.847 6.543-15.845 0-5.999-2.323-11.625-6.543-15.844l-3.69-3.69c5.448-9.774 9.733-20.112 12.802-30.887h5.19c12.36 0 22.416-10.056 22.416-22.416v-34.782c.001-12.36-10.054-22.416-22.415-22.416zm-125.17 184.787c0 1.31-1.106 2.416-2.416 2.416h-34.752c-1.31 0-2.416-1.106-2.416-2.416v-12.983-63.043c0-4.182-2.602-7.922-6.522-9.376-26.872-9.966-44.926-35.828-44.926-64.354 0-22.607 11.257-43.799 30.107-56.684.846-.578 1.594-1.05 2.248-1.437-.036 1.3-.128 2.536-.177 3.181-.075 1.015-.135 1.816-.135 2.611v47.197c0 21.663 16.927 39.755 38.534 41.188.441.029.883.029 1.324 0 21.592-1.432 38.506-19.524 38.506-41.188v-47.197c0-.791-.059-1.587-.133-2.596-.048-.648-.14-1.891-.175-3.197.652.386 1.396.857 2.239 1.434 18.855 12.888 30.112 34.08 30.112 56.687 0 28.523-18.044 54.386-44.9 64.355-3.919 1.455-6.52 5.194-6.52 9.375v63.043 12.984zm127.586-127.589c0 1.287-1.129 2.416-2.416 2.416h-12.954c-4.672 0-8.722 3.235-9.753 7.792-3.167 13.993-8.652 27.225-16.303 39.328-2.498 3.952-1.924 9.108 1.382 12.414l9.185 9.185c.596.596.685 1.322.685 1.702 0 .379-.089 1.106-.682 1.698l-24.629 24.602c-.563.566-1.226.685-1.682.685-.455 0-1.117-.119-1.701-.707l-9.185-9.185c-3.311-3.31-8.472-3.88-12.424-1.376-8.536 5.409-17.622 9.701-27.109 12.873v-43.213c31.024-14.438 51.42-45.901 51.42-80.383 0-29.217-14.515-56.581-38.825-73.198-3.724-2.545-15.049-10.288-24.954-4.587-9.726 5.6-8.757 18.727-8.344 24.333.036.487.071.896.079 1.125v47.197c0 10.946-8.366 20.123-19.168 21.178-10.817-1.056-19.196-10.233-19.196-21.178l-.001-47.125c.009-.301.045-.71.081-1.199.417-5.603 1.394-18.723-8.324-24.326-9.901-5.711-21.243 2.035-24.974 4.582-24.312 16.618-38.826 43.982-38.826 73.199 0 34.487 20.407 65.952 51.448 80.386v43.21c-9.489-3.172-18.586-7.466-27.147-12.878-1.646-1.04-3.498-1.547-5.341-1.547-2.583 0-5.145.999-7.074 2.929l-9.204 9.205c-.563.567-1.226.686-1.682.686s-1.117-.119-1.701-.706l-24.576-24.577c-.597-.596-.686-1.323-.686-1.702 0-.38.089-1.106.686-1.703l9.184-9.185c3.306-3.306 3.88-8.462 1.382-12.414-7.69-12.167-13.174-25.393-16.299-39.311-1.024-4.565-5.078-7.81-9.757-7.81h-12.982c-1.287 0-2.416-1.129-2.416-2.416v-34.782c0-1.31 1.106-2.416 2.416-2.416h12.982c4.679 0 8.732-3.245 9.757-7.81 3.125-13.918 8.608-27.145 16.299-39.311 2.498-3.952 1.924-9.108-1.382-12.414l-9.185-9.185c-.596-.596-.685-1.322-.685-1.702s.089-1.106.686-1.703l24.597-24.598c.563-.566 1.225-.685 1.681-.685s1.118.119 1.702.706l9.184 9.185c3.308 3.307 8.464 3.88 12.415 1.382 12.151-7.682 25.392-13.177 39.351-16.33 4.56-1.03 7.797-5.081 7.797-9.754v-12.953c0-1.31 1.106-2.416 2.416-2.416h34.752c1.31 0 2.416 1.106 2.416 2.416v12.955c0 4.674 3.237 8.724 7.796 9.754 13.972 3.156 27.198 8.648 39.313 16.325 3.953 2.504 9.113 1.934 12.424-1.376l9.205-9.206c.563-.566 1.226-.685 1.681-.685.456 0 1.118.119 1.706.71l24.602 24.573c.596.596.685 1.322.685 1.702s-.089 1.106-.686 1.703l-9.184 9.185c-3.306 3.306-3.88 8.462-1.382 12.414 7.65 12.103 13.136 25.334 16.303 39.328 1.031 4.557 5.081 7.792 9.753 7.792h12.954c1.31 0 2.416 1.106 2.416 2.416v34.781z",
                }),
                wp.element.createElement("path", {
                    fill: "#fe6601",
                    d: "m382.786 440.321c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.952 4.512 2.929 7.071 2.929s5.118-.977 7.071-2.929l.028-.028c3.905-3.905 3.891-10.223-.015-14.128s-10.25-3.89-14.155.013z",
                }),
                wp.element.createElement("path", {
                    fill: "#fe6601",
                    d:
                        "m429.112 343.45-79.391 40.771c-6.73-6.97-16.16-11.318-26.591-11.318h-54.396c-3.046 0-3.79-.242-3.84-.259-.441-.232-1.835-1.542-2.954-2.594l-.496-.466c-44.008-41.427-81.183-38.802-123.458-22.118-6.84 2.7-6.972 2.706-13.841 2.999l-12.3.009c-3.504-10.571-13.476-18.221-25.207-18.221h-39.996c-14.627 0-26.526 11.913-26.526 26.555v104.969c0 14.626 11.899 26.526 26.526 26.526h39.996c11.73 0 21.701-7.641 25.206-18.199h22.5c1.987 0 1.987 0 4.298.651.84.237 1.862.525 3.182.88l103.494 27.688c4.562 1.232 8.746 2.445 12.793 3.617 13.26 3.842 24.406 7.072 36.023 7.072 13.13 0 26.859-4.126 44.916-16.16.087-.058.174-.118.26-.179l19.758-14.089c4.497-3.207 5.543-9.451 2.336-13.948-3.207-4.498-9.453-5.543-13.947-2.336l-19.627 13.995c-26.204 17.429-37.331 14.207-64.153 6.435-4.132-1.197-8.404-2.435-13.165-3.721l-103.502-27.689c-1.212-.326-2.163-.594-2.943-.814-3.776-1.064-5.188-1.4-9.722-1.4h-21.152v-81.624h10.807c.144 0 .286-.003.43-.009l.57-.024c8.383-.358 10.728-.587 20.33-4.378 37.129-14.652 65.789-16.393 102.419 18.09l.495.465c6.26 5.883 9.865 8.279 20.491 8.279h54.396c6.384 0 11.951 3.544 14.853 8.765.031.058.067.113.099.171 1.296 2.397 2.034 5.139 2.034 8.051 0 9.351-7.619 16.958-16.985 16.958h-88.157c-5.522 0-10 4.477-10 10s4.478 10 10 10h88.157c20.394 0 36.985-16.579 36.985-36.958 0-2.77-.316-5.466-.896-8.063l79.028-40.585c7.48-3.84 17.708-3.428 22.786 4.812 4.492 7.263 2.021 16.917-5.744 22.453l-34.667 24.69c-4.499 3.204-5.549 9.448-2.345 13.947 1.951 2.739 5.029 4.2 8.154 4.2 2.007 0 4.033-.603 5.792-1.855l34.671-24.693c16.466-11.739 21.258-32.917 11.156-49.248-9.934-16.122-30.972-21.324-48.94-12.1zm-335.92 120.327c0 3.538-3.001 6.526-6.554 6.526h-39.996c-3.538 0-6.526-2.989-6.526-6.526v-104.968c0-3.614 2.928-6.555 6.526-6.555h39.996c3.553 0 6.554 3.001 6.554 6.555z",
                })
            ),
            longArrowToRight: wp.element.createElement(
                "svg",
                { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 493.356 493.356" },
                wp.element.createElement("path", {
                    d:
                        "M490.498,239.278l-109.632-99.929c-3.046-2.474-6.376-2.95-9.993-1.427c-3.613,1.525-5.427,4.283-5.427,8.282v63.954H9.136   c-2.666,0-4.856,0.855-6.567,2.568C0.859,214.438,0,216.628,0,219.292v54.816c0,2.663,0.855,4.853,2.568,6.563   c1.715,1.712,3.905,2.567,6.567,2.567h356.313v63.953c0,3.812,1.817,6.57,5.428,8.278c3.62,1.529,6.95,0.951,9.996-1.708   l109.632-101.077c1.903-1.902,2.852-4.182,2.852-6.849C493.356,243.367,492.401,241.181,490.498,239.278z",
                })
            ),
            scroll: wp.element.createElement(
                "svg",
                { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 330 330" },
                wp.element.createElement("path", {
                    d:
                        "M100.606 229.393c-5.857-5.857-15.355-5.857-21.213 0-5.858 5.857-5.858 15.355 0 21.213l75 75A14.954 14.954 0 00165 330a14.95 14.95 0 0010.606-4.394l75-75c5.858-5.857 5.858-15.355 0-21.213-5.857-5.857-15.355-5.857-21.213 0L180 278.787V51.212l49.394 49.394A14.95 14.95 0 00240 105a14.95 14.95 0 0010.606-4.394c5.858-5.857 5.858-15.355 0-21.213l-75-75c-5.857-5.858-15.355-5.858-21.213 0l-75 75c-5.858 5.857-5.858 15.355 0 21.213 5.857 5.857 15.355 5.857 21.213 0L150 51.212v227.574l-49.394-49.393z",
                })
            ),
            title: wp.element.createElement(
                "svg",
                { width: 24, height: 24, viewBox: "0 0 24 24" },
                wp.element.createElement("path", { fill: "#fe6601", d: "M12.25 12a.75.75 0 0 1-.75-.75v-.75h-7v.75a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 3.75 9h8.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75z" }),
                wp.element.createElement("path", { fill: "#fe6601", d: "M8 18.75a.75.75 0 0 1-.75-.75v-8a.75.75 0 0 1 1.5 0v8a.75.75 0 0 1-.75.75z" }),
                wp.element.createElement("path", {
                    fill: "#fe6601",
                    d:
                        "M9.25 19h-2.5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 0 1.5zm11-8.5h-4.5a.75.75 0 0 1 0-1.5h4.5a.75.75 0 0 1 0 1.5zm0 4h-4.5a.75.75 0 0 1 0-1.5h4.5a.75.75 0 0 1 0 1.5zm0 4h-4.5a.75.75 0 0 1 0-1.5h4.5a.75.75 0 0 1 0 1.5z",
                }),
                wp.element.createElement("path", {
                    fill: "#fe6601",
                    d:
                        "M21.25 23H2.75A2.752 2.752 0 0 1 0 20.25V3.75A2.752 2.752 0 0 1 2.75 1h18.5A2.752 2.752 0 0 1 24 3.75v16.5A2.752 2.752 0 0 1 21.25 23zM2.75 2.5c-.689 0-1.25.561-1.25 1.25v16.5c0 .689.561 1.25 1.25 1.25h18.5c.689 0 1.25-.561 1.25-1.25V3.75c0-.689-.561-1.25-1.25-1.25z",
                }),
                wp.element.createElement("path", { fill: "#fe6601", d: "M23.25 6H.75a.75.75 0 0 1 0-1.5h22.5a.75.75 0 0 1 0 1.5z" })
            ),
        },
        l = function (a) {
            var e = a.mt,
                s = a.mb,
                i = a.children;
            return wp.element.createElement("p", { className: "ssbLabel", style: { marginTop: "".concat(e || "20px"), marginBottom: "".concat(s || "5px") } }, i);
        },
        c = function (a) {
            var e = a.size,
                s = void 0 === e ? 25 : e,
                i = a.style,
                n = a.className;
            return wp.element.createElement(
                "svg",
                { xmlns: "http://www.w3.org/2000/svg", width: s, height: s, style: i, className: n, viewBox: "0 0 548.172 548.172" },
                wp.element.createElement("path", {
                    fill: "#fe6601",
                    d:
                        "M534.75 49.965c-8.945-8.945-19.694-13.422-32.261-13.422H45.681c-12.562 0-23.313 4.477-32.264 13.422C4.471 58.913 0 69.663 0 82.226v310.633c0 12.566 4.471 23.315 13.417 32.265 8.951 8.945 19.702 13.414 32.264 13.414h155.318c0 7.231-1.524 14.661-4.57 22.269-3.044 7.614-6.09 14.273-9.136 19.981-3.042 5.715-4.565 9.897-4.565 12.56 0 4.948 1.807 9.24 5.424 12.847 3.615 3.621 7.898 5.435 12.847 5.435h146.179c4.949 0 9.233-1.813 12.848-5.435 3.62-3.606 5.427-7.898 5.427-12.847 0-2.468-1.526-6.611-4.571-12.415-3.046-5.801-6.092-12.566-9.134-20.267-3.046-7.71-4.569-15.085-4.569-22.128h155.318c12.56 0 23.309-4.469 32.254-13.414 8.949-8.949 13.422-19.698 13.422-32.265V82.226c.003-12.563-4.474-23.313-13.423-32.261zm-23.123 269.803c0 2.475-.903 4.613-2.711 6.424-1.81 1.804-3.952 2.707-6.427 2.707H45.681c-2.473 0-4.615-.903-6.423-2.707-1.807-1.817-2.712-3.949-2.712-6.424V82.226c0-2.475.902-4.615 2.712-6.423 1.809-1.805 3.951-2.712 6.423-2.712h456.815c2.471 0 4.617.904 6.42 2.712 1.808 1.809 2.711 3.949 2.711 6.423v237.542z",
                })
            );
        },
        o = function (a) {
            var e = a.size,
                s = void 0 === e ? 25 : e,
                i = a.style,
                n = a.className;
            return wp.element.createElement(
                "svg",
                { xmlns: "http://www.w3.org/2000/svg", style: i, width: s, height: s, viewBox: "0 0 512 512", className: n },
                wp.element.createElement("path", {
                    fill: "#fe6601",
                    d:
                        "M394.667 0H117.333C87.936 0 64 23.936 64 53.333v405.333C64 488.064 87.936 512 117.333 512h277.333C424.064 512 448 488.064 448 458.667V53.333C448 23.936 424.064 0 394.667 0zM256 480c-11.755 0-21.333-9.579-21.333-21.333s9.579-21.333 21.333-21.333 21.333 9.579 21.333 21.333S267.755 480 256 480zm149.333-64c0 5.888-4.779 10.667-10.667 10.667H117.333c-5.888 0-10.667-4.779-10.667-10.667V53.333c0-5.888 4.779-10.667 10.667-10.667h277.333c5.888 0 10.667 4.779 10.667 10.667V416z",
                })
            );
        },
        f = function (a) {
            var e = a.size,
                s = void 0 === e ? 25 : e,
                i = a.style,
                n = a.className;
            return wp.element.createElement(
                "svg",
                { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 503.604 503.604", height: s, width: s, style: i, className: n },
                wp.element.createElement("path", {
                    fill: "#fe6601",
                    d:
                        "M337.324 0H167.192c-28.924 0-53.5 23.584-53.5 52.5v398.664c0 28.916 24.056 52.44 52.98 52.44l170.412-.184c28.92 0 52.58-23.528 52.58-52.448l.248-398.5C389.908 23.452 366.364 0 337.324 0zM227.68 31.476h49.36c4.336 0 7.868 3.52 7.868 7.868 0 4.348-3.532 7.868-7.868 7.868h-49.36a7.865 7.865 0 01-7.868-7.868 7.865 7.865 0 017.868-7.868zm-29.66 2.504c2.916-2.912 8.224-2.952 11.136 0a7.973 7.973 0 012.324 5.588c0 2.048-.864 4.088-2.324 5.548-1.452 1.46-3.504 2.32-5.548 2.32-2.084 0-4.088-.86-5.588-2.32-1.452-1.456-2.28-3.5-2.28-5.548-.004-2.088.828-4.132 2.28-5.588zm52.752 454.028c-12.984 0-23.544-10.568-23.544-23.548 0-12.984 10.56-23.548 23.544-23.548s23.544 10.564 23.544 23.548c0 12.98-10.564 23.548-23.544 23.548zm114.716-63.1H141.232V74.756h224.256v350.152z",
                })
            );
        };
    function m(a, e) {
        return (
            (function (a) {
                if (Array.isArray(a)) return a;
            })(a) ||
            (function (a, e) {
                var s = null == a ? null : ("undefined" != typeof Symbol && a[Symbol.iterator]) || a["@@iterator"];
                if (null == s) return;
                var i,
                    n,
                    t = [],
                    r = !0,
                    l = !1;
                try {
                    for (s = s.call(a); !(r = (i = s.next()).done) && (t.push(i.value), !e || t.length !== e); r = !0);
                } catch (a) {
                    (l = !0), (n = a);
                } finally {
                    try {
                        r || null == s.return || s.return();
                    } finally {
                        if (l) throw n;
                    }
                }
                return t;
            })(a, e) ||
            (function (a, e) {
                if (!a) return;
                if ("string" == typeof a) return y(a, e);
                var s = Object.prototype.toString.call(a).slice(8, -1);
                "Object" === s && a.constructor && (s = a.constructor.name);
                if ("Map" === s || "Set" === s) return Array.from(a);
                if ("Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return y(a, e);
            })(a, e) ||
            (function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
        );
    }
    function y(a, e) {
        (null == e || e > a.length) && (e = a.length);
        for (var s = 0, i = new Array(e); s < e; s++) i[s] = a[s];
        return i;
    }
    var g = function (a) {
            var e = a.onChange,
                i = a.device,
                n = void 0 === i ? "desktop" : i,
                t = a.iconSize,
                r = void 0 === t ? 14 : t,
                l = a.style,
                y = a.className,
                g = void 0 === y ? "iconButton" : y,
                d = m((0, s.useState)(!1), 2),
                u = d[0],
                p = d[1];
            return (
                window.addEventListener("click", function () {
                    p(!1);
                }),
                wp.element.createElement(
                    "div",
                    { className: "bDevice", style: l },
                    !u &&
                        wp.element.createElement(
                            "button",
                            {
                                className: g,
                                title: n[0].toUpperCase() + n.slice(1),
                                onClick: function (a) {
                                    p(!0), a.stopPropagation();
                                },
                            },
                            "desktop" == n ? wp.element.createElement(c, { size: r }) : "tablet" == n ? wp.element.createElement(o, { size: r }) : wp.element.createElement(f, { size: r })
                        ),
                    u &&
                        wp.element.createElement(
                            "div",
                            { className: "bDevicePopup" },
                            wp.element.createElement(
                                "button",
                                {
                                    className: g,
                                    title: "Desktop",
                                    onClick: function () {
                                        e("desktop"), p(!1);
                                    },
                                },
                                wp.element.createElement(c, { size: r })
                            ),
                            wp.element.createElement(
                                "button",
                                {
                                    className: g,
                                    title: "Tablet",
                                    onClick: function () {
                                        e("tablet"), p(!1);
                                    },
                                },
                                wp.element.createElement(o, { size: r })
                            ),
                            wp.element.createElement(
                                "button",
                                {
                                    className: g,
                                    title: "Mobile",
                                    onClick: function () {
                                        e("mobile"), p(!1);
                                    },
                                },
                                wp.element.createElement(f, { size: r })
                            )
                        )
                )
            );
        }
        
    
  
    var  p = [];
	
	 function ca(a, e) {
        var s = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(a);
            e &&
                (i = i.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                })),
                s.push.apply(s, i);
        }
        return s;
    }
	
 function oa(a) {
        for (var e = 1; e < arguments.length; e++) {
            var s = null != arguments[e] ? arguments[e] : {};
            e % 2
                ? ca(Object(s), !0).forEach(function (e) {
                      fa(a, e, s[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s))
                : ca(Object(s)).forEach(function (e) {
                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e));
                  });
        }
        return a;
    }
	
	function fa(a, e, s) {
        return e in a ? Object.defineProperty(a, e, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : (a[e] = s), a;
    }
	
    function ma(a, e) {
        return (
            (function (a) {
                if (Array.isArray(a)) return a;
            })(a) ||
            (function (a, e) {
                var s = null == a ? null : ("undefined" != typeof Symbol && a[Symbol.iterator]) || a["@@iterator"];
                if (null == s) return;
                var i,
                    n,
                    t = [],
                    r = !0,
                    l = !1;
                try {
                    for (s = s.call(a); !(r = (i = s.next()).done) && (t.push(i.value), !e || t.length !== e); r = !0);
                } catch (a) {
                    (l = !0), (n = a);
                } finally {
                    try {
                        r || null == s.return || s.return();
                    } finally {
                        if (l) throw n;
                    }
                }
                return t;
            })(a, e) ||
            (function (a, e) {
                if (!a) return;
                if ("string" == typeof a) return ya(a, e);
                var s = Object.prototype.toString.call(a).slice(8, -1);
                "Object" === s && a.constructor && (s = a.constructor.name);
                if ("Map" === s || "Set" === s) return Array.from(a);
                if ("Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return ya(a, e);
            })(a, e) ||
            (function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
        );
    }
	
    (0, a.registerBlockType)("info-box/infos", {
        title: (0, e.__)("Info Box", "info-box"),
        description: (0, e.__)("Info Box for web page", "info-box"),
        icon: r.infos,
        category: "gradiant",
        keywords: [(0, e.__)("infos", "info-box"), (0, e.__)("infos template", "info-box"), (0, e.__)("infos section", "info-box")],
        supports: { align: ["wide", "full"], html: !1 },
        attributes: {
            cId: { type: "string" },
        },
        edit: function (a) {
            var r,
                c,
                o = a.className,
                f = a.attributes,
                x = a.setAttributes,
                O = a.clientId;
            (0, s.useEffect)(
                function () {
                    O && x({ cId: O });
                },
                [O]
            );
          
            return wp.element.createElement(
                wp.element.Fragment,
                null,
                wp.element.createElement(
                    "div",
                    { className: o, id: "gradiantInfos-".concat(O) },
                    wp.element.createElement("style", {
                        dangerouslySetInnerHTML: {
                            __html: "\n                    @import url("
                                .concat(O, " .gradiantInfos .gradiantInfo .title{\n                        ")
                                .concat(O, " .gradiantInfos .gradiantInfo .description{\n                        "),
                        },
                    }),
                    wp.element.createElement(
                        "div",
                        { className: "gradiant"},
                      //  wp.element.createElement(n.InnerBlocks, { allowedBlocks: ["info-box/info"], template: [["info-box/info"], ["info-box/info"], ["info-box/info"]] })
						 wp.element.createElement(n.InnerBlocks, { allowedBlocks: ["info-box/info"], template: [["info-box/info"]] })
                    )
                )
            );
        },
        save: function () {
            return wp.element.createElement(n.InnerBlocks.Content, null);
        },
		example: { attributes: { preview: !0 } },
    });
       
    
       var  Ma = [
             { class: "", name: "no-icon" },
            { class: "fa fa-500px", name: "500px" },
            { class: "fab fa-accessible-icon", name: "accessible-icon" },
            { class: "fab fa-accusoft", name: "accusoft" },
            { class: "fab fa-acquisitions-incorporated", name: "acquisitions-incorporated" },
            { class: "fa fa-ad", name: "ad" },
            { class: "fa fa-address-book", name: "address-book" },
            { class: "fa fa-address-card", name: "address-card" },
            { class: "fa fa-adjust", name: "adjust" },
            { class: "fa fa-adn", name: "adn" },
            { class: "fab fa-adversal", name: "adversal" },
            { class: "fab fa-affiliatetheme", name: "affiliatetheme" },
            { class: "fa fa-air-freshener", name: "air-freshener" },
            { class: "fab fa-airbnb", name: "airbnb" },
            { class: "fab fa-algolia", name: "algolia" },
            { class: "fa fa-align-center", name: "align-center" },
            { class: "fa fa-align-justify", name: "align-justify" },
            { class: "fa fa-align-left", name: "align-left" },
            { class: "fa fa-align-right", name: "align-right" },
            { class: "fab fa-alipay", name: "alipay" },
            { class: "fa fa-allergies", name: "allergies" },
            { class: "fa fa-amazon", name: "amazon" },
            { class: "fab fa-amazon-pay", name: "amazon-pay" },
            { class: "fa fa-ambulance", name: "ambulance" },
            { class: "fa fa-american-sign-language-interpreting", name: "american-sign-language-interpreting" },
            { class: "fab fa-amilia", name: "amilia" },
            { class: "fa fa-anchor", name: "anchor" },
            { class: "fa fa-android", name: "android" },
            { class: "fa fa-angellist", name: "angellist" },
            { class: "fa fa-angle-double-down", name: "angle-double-down" },
            { class: "fa fa-angle-double-left", name: "angle-double-left" },
            { class: "fa fa-angle-double-right", name: "angle-double-right" },
            { class: "fa fa-angle-double-up", name: "angle-double-up" },
            { class: "fa fa-angle-down", name: "angle-down" },
            { class: "fa fa-angle-left", name: "angle-left" },
            { class: "fa fa-angle-right", name: "angle-right" },
            { class: "fa fa-angle-up", name: "angle-up" },
            { class: "fa fa-angry", name: "angry" },
            { class: "fab fa-angrycreative", name: "angrycreative" },
            { class: "fab fa-angular", name: "angular" },
            { class: "fa fa-ankh", name: "ankh" },
            { class: "fab fa-app-store", name: "app-store" },
            { class: "fab fa-app-store-ios", name: "app-store-ios" },
            { class: "fab fa-apper", name: "apper" },
            { class: "fa fa-apple", name: "apple" },
            { class: "fa fa-apple-alt", name: "apple-alt" },
            { class: "fab fa-apple-pay", name: "apple-pay" },
            { class: "fa fa-archive", name: "archive" },
            { class: "fa fa-archway", name: "archway" },
            { class: "fa fa-arrow-alt-circle-down", name: "arrow-alt-circle-down" },
            { class: "fa fa-arrow-alt-circle-left", name: "arrow-alt-circle-left" },
            { class: "fa fa-arrow-alt-circle-right", name: "arrow-alt-circle-right" },
            { class: "fa fa-arrow-alt-circle-up", name: "arrow-alt-circle-up" },
            { class: "fa fa-arrow-circle-down", name: "arrow-circle-down" },
            { class: "fa fa-arrow-circle-left", name: "arrow-circle-left" },
            { class: "fa fa-arrow-circle-right", name: "arrow-circle-right" },
            { class: "fa fa-arrow-circle-up", name: "arrow-circle-up" },
            { class: "fa fa-arrow-down", name: "arrow-down" },
            { class: "fa fa-arrow-left", name: "arrow-left" },
            { class: "fa fa-arrow-right", name: "arrow-right" },
            { class: "fa fa-arrow-up", name: "arrow-up" },
            { class: "fa fa-arrows-alt", name: "arrows-alt" },
            { class: "fa fa-arrows-alt-h", name: "arrows-alt-h" },
            { class: "fa fa-arrows-alt-v", name: "arrows-alt-v" },
            { class: "fab fa-artstation", name: "artstation" },
            { class: "fa fa-assistive-listening-systems", name: "assistive-listening-systems" },
            { class: "fa fa-asterisk", name: "asterisk" },
            { class: "fab fa-asymmetrik", name: "asymmetrik" },
            { class: "fa fa-at", name: "at" },
            { class: "fa fa-atlas", name: "atlas" },
            { class: "fab fa-atlassian", name: "atlassian" },
            { class: "fa fa-atom", name: "atom" },
            { class: "fab fa-audible", name: "audible" },
            { class: "fa fa-audio-description", name: "audio-description" },
            { class: "fab fa-autoprefixer", name: "autoprefixer" },
            { class: "fab fa-avianex", name: "avianex" },
            { class: "fab fa-aviato", name: "aviato" },
            { class: "fa fa-award", name: "award" },
            { class: "fab fa-aws", name: "aws" },
            { class: "fa fa-baby", name: "baby" },
            { class: "fa fa-baby-carriage", name: "baby-carriage" },
            { class: "fa fa-backspace", name: "backspace" },
            { class: "fa fa-backward", name: "backward" },
            { class: "fa fa-bacon", name: "bacon" },
            { class: "fa fa-bacteria", name: "bacteria" },
            { class: "fa fa-bacterium", name: "bacterium" },
            { class: "fa fa-bahai", name: "bahai" },
            { class: "fa fa-balance-scale", name: "balance-scale" },
            { class: "fa fa-balance-scale-left", name: "balance-scale-left" },
            { class: "fa fa-balance-scale-right", name: "balance-scale-right" },
            { class: "fa fa-ban", name: "ban" },
            { class: "fa fa-band-aid", name: "band-aid" },
            { class: "fa fa-bandcamp", name: "bandcamp" },
            { class: "fa fa-barcode", name: "barcode" },
            { class: "fa fa-bars", name: "bars" },
            { class: "fa fa-baseball-ball", name: "baseball-ball" },
            { class: "fa fa-basketball-ball", name: "basketball-ball" },
            { class: "fa fa-bath", name: "bath" },
            { class: "fa fa-battery-empty", name: "battery-empty" },
            { class: "fa fa-battery-full", name: "battery-full" },
            { class: "fa fa-battery-half", name: "battery-half" },
            { class: "fa fa-battery-quarter", name: "battery-quarter" },
            { class: "fa fa-battery-three-quarters", name: "battery-three-quarters" },
            { class: "fab fa-battle-net", name: "battle-net" },
            { class: "fa fa-bed", name: "bed" },
            { class: "fa fa-beer", name: "beer" },
            { class: "fa fa-behance", name: "behance" },
            { class: "fa fa-behance-square", name: "behance-square" },
            { class: "fa fa-bell", name: "bell" },
            { class: "fa fa-bell-slash", name: "bell-slash" },
            { class: "fa fa-bezier-curve", name: "bezier-curve" },
            { class: "fa fa-bible", name: "bible" },
            { class: "fa fa-bicycle", name: "bicycle" },
            { class: "fa fa-biking", name: "biking" },
            { class: "fab fa-bimobject", name: "bimobject" },
            { class: "fa fa-binoculars", name: "binoculars" },
            { class: "fa fa-biohazard", name: "biohazard" },
            { class: "fa fa-birthday-cake", name: "birthday-cake" },
            { class: "fa fa-bitbucket", name: "bitbucket" },
            { class: "fa fa-bitcoin", name: "bitcoin" },
            { class: "fab fa-bity", name: "bity" },
            { class: "fa fa-black-tie", name: "black-tie" },
            { class: "fab fa-blackberry", name: "blackberry" },
            { class: "fa fa-blender", name: "blender" },
            { class: "fa fa-blender-phone", name: "blender-phone" },
            { class: "fa fa-blind", name: "blind" },
            { class: "fa fa-blog", name: "blog" },
            { class: "fab fa-blogger", name: "blogger" },
            { class: "fab fa-blogger-b", name: "blogger-b" },
            { class: "fa fa-bluetooth", name: "bluetooth" },
            { class: "fa fa-bluetooth-b", name: "bluetooth-b" },
            { class: "fa fa-bold", name: "bold" },
            { class: "fa fa-bolt", name: "bolt" },
            { class: "fa fa-bomb", name: "bomb" },
            { class: "fa fa-bone", name: "bone" },
            { class: "fa fa-bong", name: "bong" },
            { class: "fa fa-book", name: "book" },
            { class: "fa fa-book-dead", name: "book-dead" },
            { class: "fa fa-book-medical", name: "book-medical" },
            { class: "fa fa-book-open", name: "book-open" },
            { class: "fa fa-book-reader", name: "book-reader" },
            { class: "fa fa-bookmark", name: "bookmark" },
            { class: "fab fa-bootstrap", name: "bootstrap" },
            { class: "fa fa-border-all", name: "border-all" },
            { class: "fa fa-border-none", name: "border-none" },
            { class: "fa fa-border-style", name: "border-style" },
            { class: "fa fa-bowling-ball", name: "bowling-ball" },
            { class: "fa fa-box", name: "box" },
            { class: "fa fa-box-open", name: "box-open" },
            { class: "fa fa-box-tissue", name: "box-tissue" },
            { class: "fa fa-boxes", name: "boxes" },
            { class: "fa fa-braille", name: "braille" },
            { class: "fa fa-brain", name: "brain" },
            { class: "fa fa-bread-slice", name: "bread-slice" },
            { class: "fa fa-briefcase", name: "briefcase" },
            { class: "fa fa-briefcase-medical", name: "briefcase-medical" },
            { class: "fa fa-broadcast-tower", name: "broadcast-tower" },
            { class: "fa fa-broom", name: "broom" },
            { class: "fa fa-brush", name: "brush" },
            { class: "fa fa-btc", name: "btc" },
            { class: "fab fa-buffer", name: "buffer" },
            { class: "fa fa-bug", name: "bug" },
            { class: "fa fa-building", name: "building" },
            { class: "fa fa-bullhorn", name: "bullhorn" },
            { class: "fa fa-bullseye", name: "bullseye" },
            { class: "fa fa-burn", name: "burn" },
            { class: "fab fa-buromobelexperte", name: "buromobelexperte" },
            { class: "fa fa-bus", name: "bus" },
            { class: "fa fa-bus-alt", name: "bus-alt" },
            { class: "fa fa-business-time", name: "business-time" },
            { class: "fab fa-buy-n-large", name: "buy-n-large" },
            { class: "fa fa-buysellads", name: "buysellads" },
            { class: "fa fa-calculator", name: "calculator" },
            { class: "fa fa-calendar", name: "calendar" },
            { class: "fa fa-calendar-alt", name: "calendar-alt" },
            { class: "fa fa-calendar-check", name: "calendar-check" },
            { class: "fa fa-calendar-day", name: "calendar-day" },
            { class: "fa fa-calendar-minus", name: "calendar-minus" },
            { class: "fa fa-calendar-plus", name: "calendar-plus" },
            { class: "fa fa-calendar-times", name: "calendar-times" },
            { class: "fa fa-calendar-week", name: "calendar-week" },
            { class: "fa fa-camera", name: "camera" },
            { class: "fa fa-camera-retro", name: "camera-retro" },
            { class: "fa fa-campground", name: "campground" },
            { class: "fab fa-canadian-maple-leaf", name: "canadian-maple-leaf" },
            { class: "fa fa-candy-cane", name: "candy-cane" },
            { class: "fa fa-cannabis", name: "cannabis" },
            { class: "fa fa-capsules", name: "capsules" },
            { class: "fa fa-car", name: "car" },
            { class: "fa fa-car-alt", name: "car-alt" },
            { class: "fa fa-car-battery", name: "car-battery" },
            { class: "fa fa-car-crash", name: "car-crash" },
            { class: "fa fa-car-side", name: "car-side" },
            { class: "fa fa-caravan", name: "caravan" },
            { class: "fa fa-caret-down", name: "caret-down" },
            { class: "fa fa-caret-left", name: "caret-left" },
            { class: "fa fa-caret-right", name: "caret-right" },
            { class: "fa fa-caret-square-down", name: "caret-square-down" },
            { class: "fa fa-caret-square-left", name: "caret-square-left" },
            { class: "fa fa-caret-square-right", name: "caret-square-right" },
            { class: "fa fa-caret-square-up", name: "caret-square-up" },
            { class: "fa fa-caret-up", name: "caret-up" },
            { class: "fa fa-carrot", name: "carrot" },
            { class: "fa fa-cart-arrow-down", name: "cart-arrow-down" },
            { class: "fa fa-cart-plus", name: "cart-plus" },
            { class: "fa fa-cash-register", name: "cash-register" },
            { class: "fa fa-cat", name: "cat" },
            { class: "fab fa-cc-amazon-pay", name: "cc-amazon-pay" },
            { class: "fa fa-cc-amex", name: "cc-amex" },
            { class: "fab fa-cc-apple-pay", name: "cc-apple-pay" },
            { class: "fa fa-cc-diners-club", name: "cc-diners-club" },
            { class: "fa fa-cc-discover", name: "cc-discover" },
            { class: "fa fa-cc-jcb", name: "cc-jcb" },
            { class: "fa fa-cc-mastercard", name: "cc-mastercard" },
            { class: "fa fa-cc-paypal", name: "cc-paypal" },
            { class: "fa fa-cc-stripe", name: "cc-stripe" },
            { class: "fa fa-cc-visa", name: "cc-visa" },
            { class: "fab fa-centercode", name: "centercode" },
            { class: "fab fa-centos", name: "centos" },
            { class: "fa fa-certificate", name: "certificate" },
            { class: "fa fa-chair", name: "chair" },
            { class: "fa fa-chalkboard", name: "chalkboard" },
            { class: "fa fa-chalkboard-teacher", name: "chalkboard-teacher" },
            { class: "fa fa-charging-station", name: "charging-station" },
            { class: "fa fa-chart-area", name: "chart-area" },
            { class: "fa fa-chart-bar", name: "chart-bar" },
            { class: "fa fa-chart-line", name: "chart-line" },
            { class: "fa fa-chart-pie", name: "chart-pie" },
            { class: "fa fa-check", name: "check" },
            { class: "fa fa-check-circle", name: "check-circle" },
            { class: "fa fa-check-double", name: "check-double" },
            { class: "fa fa-check-square", name: "check-square" },
            { class: "fa fa-cheese", name: "cheese" },
            { class: "fa fa-chess", name: "chess" },
            { class: "fa fa-chess-bishop", name: "chess-bishop" },
            { class: "fa fa-chess-board", name: "chess-board" },
            { class: "fa fa-chess-king", name: "chess-king" },
            { class: "fa fa-chess-knight", name: "chess-knight" },
            { class: "fa fa-chess-pawn", name: "chess-pawn" },
            { class: "fa fa-chess-queen", name: "chess-queen" },
            { class: "fa fa-chess-rook", name: "chess-rook" },
            { class: "fa fa-chevron-circle-down", name: "chevron-circle-down" },
            { class: "fa fa-chevron-circle-left", name: "chevron-circle-left" },
            { class: "fa fa-chevron-circle-right", name: "chevron-circle-right" },
            { class: "fa fa-chevron-circle-up", name: "chevron-circle-up" },
            { class: "fa fa-chevron-down", name: "chevron-down" },
            { class: "fa fa-chevron-left", name: "chevron-left" },
            { class: "fa fa-chevron-right", name: "chevron-right" },
            { class: "fa fa-chevron-up", name: "chevron-up" },
            { class: "fa fa-child", name: "child" },
            { class: "fa fa-chrome", name: "chrome" },
            { class: "fab fa-chromecast", name: "chromecast" },
            { class: "fa fa-church", name: "church" },
            { class: "fa fa-circle", name: "circle" },
            { class: "fa fa-circle-notch", name: "circle-notch" },
            { class: "fa fa-city", name: "city" },
            { class: "fa fa-clinic-medical", name: "clinic-medical" },
            { class: "fa fa-clipboard", name: "clipboard" },
            { class: "fa fa-clipboard-check", name: "clipboard-check" },
            { class: "fa fa-clipboard-list", name: "clipboard-list" },
            { class: "fa fa-clock", name: "clock" },
            { class: "fa fa-clone", name: "clone" },
            { class: "fa fa-closed-captioning", name: "closed-captioning" },
            { class: "fa fa-cloud", name: "cloud" },
            { class: "fa fa-cloud-download-alt", name: "cloud-download-alt" },
            { class: "fa fa-cloud-meatball", name: "cloud-meatball" },
            { class: "fa fa-cloud-moon", name: "cloud-moon" },
            { class: "fa fa-cloud-moon-rain", name: "cloud-moon-rain" },
            { class: "fa fa-cloud-rain", name: "cloud-rain" },
            { class: "fa fa-cloud-showers-heavy", name: "cloud-showers-heavy" },
            { class: "fa fa-cloud-sun", name: "cloud-sun" },
            { class: "fa fa-cloud-sun-rain", name: "cloud-sun-rain" },
            { class: "fa fa-cloud-upload-alt", name: "cloud-upload-alt" },
            { class: "fab fa-cloudflare", name: "cloudflare" },
            { class: "fab fa-cloudscale", name: "cloudscale" },
            { class: "fab fa-cloudsmith", name: "cloudsmith" },
            { class: "fab fa-cloudversify", name: "cloudversify" },
            { class: "fa fa-cocktail", name: "cocktail" },
            { class: "fa fa-code", name: "code" },
            { class: "fa fa-code-branch", name: "code-branch" },
            { class: "fa fa-codepen", name: "codepen" },
            { class: "fa fa-codiepie", name: "codiepie" },
            { class: "fa fa-coffee", name: "coffee" },
            { class: "fa fa-cog", name: "cog" },
            { class: "fa fa-cogs", name: "cogs" },
            { class: "fa fa-coins", name: "coins" },
            { class: "fa fa-columns", name: "columns" },
            { class: "fa fa-comment", name: "comment" },
            { class: "fa fa-comment-alt", name: "comment-alt" },
            { class: "fa fa-comment-dollar", name: "comment-dollar" },
            { class: "fa fa-comment-dots", name: "comment-dots" },
            { class: "fa fa-comment-medical", name: "comment-medical" },
            { class: "fa fa-comment-slash", name: "comment-slash" },
            { class: "fa fa-comments", name: "comments" },
            { class: "fa fa-comments-dollar", name: "comments-dollar" },
            { class: "fa fa-compact-disc", name: "compact-disc" },
            { class: "fa fa-compass", name: "compass" },
            { class: "fa fa-compress", name: "compress" },
            { class: "fa fa-compress-alt", name: "compress-alt" },
            { class: "fa fa-compress-arrows-alt", name: "compress-arrows-alt" },
            { class: "fa fa-concierge-bell", name: "concierge-bell" },
            { class: "fab fa-confluence", name: "confluence" },
            { class: "fa fa-connectdevelop", name: "connectdevelop" },
            { class: "fa fa-contao", name: "contao" },
            { class: "fa fa-cookie", name: "cookie" },
            { class: "fa fa-cookie-bite", name: "cookie-bite" },
            { class: "fa fa-copy", name: "copy" },
            { class: "fa fa-copyright", name: "copyright" },
            { class: "fab fa-cotton-bureau", name: "cotton-bureau" },
            { class: "fa fa-couch", name: "couch" },
            { class: "fab fa-cpanel", name: "cpanel" },
            { class: "fa fa-creative-commons", name: "creative-commons" },
            { class: "fab fa-creative-commons-by", name: "creative-commons-by" },
            { class: "fab fa-creative-commons-nc", name: "creative-commons-nc" },
            { class: "fab fa-creative-commons-nc-eu", name: "creative-commons-nc-eu" },
            { class: "fab fa-creative-commons-nc-jp", name: "creative-commons-nc-jp" },
            { class: "fab fa-creative-commons-nd", name: "creative-commons-nd" },
            { class: "fab fa-creative-commons-pd", name: "creative-commons-pd" },
            { class: "fab fa-creative-commons-pd-alt", name: "creative-commons-pd-alt" },
            { class: "fab fa-creative-commons-remix", name: "creative-commons-remix" },
            { class: "fab fa-creative-commons-sa", name: "creative-commons-sa" },
            { class: "fab fa-creative-commons-sampling", name: "creative-commons-sampling" },
            { class: "fab fa-creative-commons-sampling-plus", name: "creative-commons-sampling-plus" },
            { class: "fab fa-creative-commons-share", name: "creative-commons-share" },
            { class: "fab fa-creative-commons-zero", name: "creative-commons-zero" },
            { class: "fa fa-credit-card", name: "credit-card" },
            { class: "fab fa-critical-role", name: "critical-role" },
            { class: "fa fa-crop", name: "crop" },
            { class: "fa fa-crop-alt", name: "crop-alt" },
            { class: "fa fa-cross", name: "cross" },
            { class: "fa fa-crosshairs", name: "crosshairs" },
            { class: "fa fa-crow", name: "crow" },
            { class: "fa fa-crown", name: "crown" },
            { class: "fa fa-crutch", name: "crutch" },
            { class: "fa fa-css3", name: "css3" },
            { class: "fab fa-css3-alt", name: "css3-alt" },
            { class: "fa fa-cube", name: "cube" },
            { class: "fa fa-cubes", name: "cubes" },
            { class: "fa fa-cut", name: "cut" },
            { class: "fab fa-cuttlefish", name: "cuttlefish" },
            { class: "fab fa-d-and-d", name: "d-and-d" },
            { class: "fab fa-d-and-d-beyond", name: "d-and-d-beyond" },
            { class: "fab fa-dailymotion", name: "dailymotion" },
            { class: "fa fa-dashcube", name: "dashcube" },
            { class: "fa fa-database", name: "database" },
            { class: "fa fa-deaf", name: "deaf" },
            { class: "fab fa-deezer", name: "deezer" },
            { class: "fa fa-delicious", name: "delicious" },
            { class: "fa fa-democrat", name: "democrat" },
            { class: "fab fa-deploydog", name: "deploydog" },
            { class: "fab fa-deskpro", name: "deskpro" },
            { class: "fa fa-desktop", name: "desktop" },
            { class: "fab fa-dev", name: "dev" },
            { class: "fa fa-deviantart", name: "deviantart" },
            { class: "fa fa-dharmachakra", name: "dharmachakra" },
            { class: "fab fa-dhl", name: "dhl" },
            { class: "fa fa-diagnoses", name: "diagnoses" },
            { class: "fab fa-diaspora", name: "diaspora" },
            { class: "fa fa-dice", name: "dice" },
            { class: "fa fa-dice-d20", name: "dice-d20" },
            { class: "fa fa-dice-d6", name: "dice-d6" },
            { class: "fa fa-dice-five", name: "dice-five" },
            { class: "fa fa-dice-four", name: "dice-four" },
            { class: "fa fa-dice-one", name: "dice-one" },
            { class: "fa fa-dice-six", name: "dice-six" },
            { class: "fa fa-dice-three", name: "dice-three" },
            { class: "fa fa-dice-two", name: "dice-two" },
            { class: "fa fa-digg", name: "digg" },
            { class: "fab fa-digital-ocean", name: "digital-ocean" },
            { class: "fa fa-digital-tachograph", name: "digital-tachograph" },
            { class: "fa fa-directions", name: "directions" },
            { class: "fab fa-discord", name: "discord" },
            { class: "fab fa-discourse", name: "discourse" },
            { class: "fa fa-disease", name: "disease" },
            { class: "fa fa-divide", name: "divide" },
            { class: "fa fa-dizzy", name: "dizzy" },
            { class: "fa fa-dna", name: "dna" },
            { class: "fab fa-dochub", name: "dochub" },
            { class: "fab fa-docker", name: "docker" },
            { class: "fa fa-dog", name: "dog" },
            { class: "fa fa-dollar-sign", name: "dollar-sign" },
            { class: "fa fa-dolly", name: "dolly" },
            { class: "fa fa-dolly-flatbed", name: "dolly-flatbed" },
            { class: "fa fa-donate", name: "donate" },
            { class: "fa fa-door-closed", name: "door-closed" },
            { class: "fa fa-door-open", name: "door-open" },
            { class: "fa fa-dot-circle", name: "dot-circle" },
            { class: "fa fa-dove", name: "dove" },
            { class: "fa fa-download", name: "download" },
            { class: "fab fa-draft2digital", name: "draft2digital" },
            { class: "fa fa-drafting-compass", name: "drafting-compass" },
            { class: "fa fa-dragon", name: "dragon" },
            { class: "fa fa-draw-polygon", name: "draw-polygon" },
            { class: "fa fa-dribbble", name: "dribbble" },
            { class: "fab fa-dribbble-square", name: "dribbble-square" },
            { class: "fa fa-dropbox", name: "dropbox" },
            { class: "fa fa-drum", name: "drum" },
            { class: "fa fa-drum-steelpan", name: "drum-steelpan" },
            { class: "fa fa-drumstick-bite", name: "drumstick-bite" },
            { class: "fa fa-drupal", name: "drupal" },
            { class: "fa fa-dumbbell", name: "dumbbell" },
            { class: "fa fa-dumpster", name: "dumpster" },
            { class: "fa fa-dumpster-fire", name: "dumpster-fire" },
            { class: "fa fa-dungeon", name: "dungeon" },
            { class: "fab fa-dyalog", name: "dyalog" },
            { class: "fab fa-earlybirds", name: "earlybirds" },
            { class: "fab fa-ebay", name: "ebay" },
            { class: "fa fa-edge", name: "edge" },
            { class: "fab fa-edge-legacy", name: "edge-legacy" },
            { class: "fa fa-edit", name: "edit" },
            { class: "fa fa-egg", name: "egg" },
            { class: "fa fa-eject", name: "eject" },
            { class: "fab fa-elementor", name: "elementor" },
            { class: "fa fa-ellipsis-h", name: "ellipsis-h" },
            { class: "fa fa-ellipsis-v", name: "ellipsis-v" },
            { class: "fab fa-ello", name: "ello" },
            { class: "fab fa-ember", name: "ember" },
            { class: "fa fa-empire", name: "empire" },
            { class: "fa fa-envelope", name: "envelope" },
            { class: "fa fa-envelope-open", name: "envelope-open" },
            { class: "fa fa-envelope-open-text", name: "envelope-open-text" },
            { class: "fa fa-envelope-square", name: "envelope-square" },
            { class: "fa fa-envira", name: "envira" },
            { class: "fa fa-equals", name: "equals" },
            { class: "fa fa-eraser", name: "eraser" },
            { class: "fab fa-erlang", name: "erlang" },
            { class: "fab fa-ethereum", name: "ethereum" },
            { class: "fa fa-ethernet", name: "ethernet" },
            { class: "fa fa-etsy", name: "etsy" },
            { class: "fa fa-euro-sign", name: "euro-sign" },
            { class: "fab fa-evernote", name: "evernote" },
            { class: "fa fa-exchange-alt", name: "exchange-alt" },
            { class: "fa fa-exclamation", name: "exclamation" },
            { class: "fa fa-exclamation-circle", name: "exclamation-circle" },
            { class: "fa fa-exclamation-triangle", name: "exclamation-triangle" },
            { class: "fa fa-expand", name: "expand" },
            { class: "fa fa-expand-alt", name: "expand-alt" },
            { class: "fa fa-expand-arrows-alt", name: "expand-arrows-alt" },
            { class: "fa fa-expeditedssl", name: "expeditedssl" },
            { class: "fa fa-external-link-alt", name: "external-link-alt" },
            { class: "fa fa-external-link-square-alt", name: "external-link-square-alt" },
            { class: "fa fa-eye", name: "eye" },
            { class: "fa fa-eye-dropper", name: "eye-dropper" },
            { class: "fa fa-eye-slash", name: "eye-slash" },
            { class: "fa fa-facebook", name: "facebook" },
            { class: "fa fa-facebook-f", name: "facebook-f" },
            { class: "fab fa-facebook-messenger", name: "facebook-messenger" },
            { class: "fa fa-facebook-square", name: "facebook-square" },
            { class: "fa fa-fan", name: "fan" },
            { class: "fab fa-fantasy-flight-games", name: "fantasy-flight-games" },
            { class: "fa fa-fast-backward", name: "fast-backward" },
            { class: "fa fa-fast-forward", name: "fast-forward" },
            { class: "fa fa-faucet", name: "faucet" },
            { class: "fa fa-fax", name: "fax" },
            { class: "fa fa-feather", name: "feather" },
            { class: "fa fa-feather-alt", name: "feather-alt" },
            { class: "fab fa-fedex", name: "fedex" },
            { class: "fab fa-fedora", name: "fedora" },
            { class: "fa fa-female", name: "female" },
            { class: "fa fa-fighter-jet", name: "fighter-jet" },
            { class: "fab fa-figma", name: "figma" },
            { class: "fa fa-file", name: "file" },
            { class: "fa fa-file-alt", name: "file-alt" },
            { class: "fa fa-file-archive", name: "file-archive" },
            { class: "fa fa-file-audio", name: "file-audio" },
            { class: "fa fa-file-code", name: "file-code" },
            { class: "fa fa-file-contract", name: "file-contract" },
            { class: "fa fa-file-csv", name: "file-csv" },
            { class: "fa fa-file-download", name: "file-download" },
            { class: "fa fa-file-excel", name: "file-excel" },
            { class: "fa fa-file-export", name: "file-export" },
            { class: "fa fa-file-image", name: "file-image" },
            { class: "fa fa-file-import", name: "file-import" },
            { class: "fa fa-file-invoice", name: "file-invoice" },
            { class: "fa fa-file-invoice-dollar", name: "file-invoice-dollar" },
            { class: "fa fa-file-medical", name: "file-medical" },
            { class: "fa fa-file-medical-alt", name: "file-medical-alt" },
            { class: "fa fa-file-pdf", name: "file-pdf" },
            { class: "fa fa-file-powerpoint", name: "file-powerpoint" },
            { class: "fa fa-file-prescription", name: "file-prescription" },
            { class: "fa fa-file-signature", name: "file-signature" },
            { class: "fa fa-file-upload", name: "file-upload" },
            { class: "fa fa-file-video", name: "file-video" },
            { class: "fa fa-file-word", name: "file-word" },
            { class: "fa fa-fill", name: "fill" },
            { class: "fa fa-fill-drip", name: "fill-drip" },
            { class: "fa fa-film", name: "film" },
            { class: "fa fa-filter", name: "filter" },
            { class: "fa fa-fingerprint", name: "fingerprint" },
            { class: "fa fa-fire", name: "fire" },
            { class: "fa fa-fire-alt", name: "fire-alt" },
            { class: "fa fa-fire-extinguisher", name: "fire-extinguisher" },
            { class: "fa fa-firefox", name: "firefox" },
            { class: "fab fa-firefox-browser", name: "firefox-browser" },
            { class: "fa fa-first-aid", name: "first-aid" },
            { class: "fa fa-first-order", name: "first-order" },
            { class: "fab fa-first-order-alt", name: "first-order-alt" },
            { class: "fab fa-firstdraft", name: "firstdraft" },
            { class: "fa fa-fish", name: "fish" },
            { class: "fa fa-fist-raised", name: "fist-raised" },
            { class: "fa fa-flag", name: "flag" },
            { class: "fa fa-flag-checkered", name: "flag-checkered" },
            { class: "fa fa-flag-usa", name: "flag-usa" },
            { class: "fa fa-flask", name: "flask" },
            { class: "fa fa-flickr", name: "flickr" },
            { class: "fab fa-flipboard", name: "flipboard" },
            { class: "fa fa-flushed", name: "flushed" },
            { class: "fab fa-fly", name: "fly" },
            { class: "fa fa-folder", name: "folder" },
            { class: "fa fa-folder-minus", name: "folder-minus" },
            { class: "fa fa-folder-open", name: "folder-open" },
            { class: "fa fa-folder-plus", name: "folder-plus" },
            { class: "fa fa-font", name: "font" },
            { class: "fa fa-font-awesome", name: "font-awesome" },
            { class: "fab fa-font-awesome-alt", name: "font-awesome-alt" },
            { class: "fab fa-font-awesome-flag", name: "font-awesome-flag" },
            { class: "fa fa-fonticons", name: "fonticons" },
            { class: "fab fa-fonticons-fi", name: "fonticons-fi" },
            { class: "fa fa-football-ball", name: "football-ball" },
            { class: "fa fa-fort-awesome", name: "fort-awesome" },
            { class: "fab fa-fort-awesome-alt", name: "fort-awesome-alt" },
            { class: "fa fa-forumbee", name: "forumbee" },
            { class: "fa fa-forward", name: "forward" },
            { class: "fa fa-foursquare", name: "foursquare" },
            { class: "fa fa-free-code-camp", name: "free-code-camp" },
            { class: "fab fa-freebsd", name: "freebsd" },
            { class: "fa fa-frog", name: "frog" },
            { class: "fa fa-frown", name: "frown" },
            { class: "fa fa-frown-open", name: "frown-open" },
            { class: "fab fa-fulcrum", name: "fulcrum" },
            { class: "fa fa-funnel-dollar", name: "funnel-dollar" },
            { class: "fa fa-futbol", name: "futbol" },
            { class: "fab fa-galactic-republic", name: "galactic-republic" },
            { class: "fab fa-galactic-senate", name: "galactic-senate" },
            { class: "fa fa-gamepad", name: "gamepad" },
            { class: "fa fa-gas-pump", name: "gas-pump" },
            { class: "fa fa-gavel", name: "gavel" },
            { class: "fa fa-gem", name: "gem" },
            { class: "fa fa-genderless", name: "genderless" },
            { class: "fa fa-get-pocket", name: "get-pocket" },
            { class: "fa fa-gg", name: "gg" },
            { class: "fa fa-gg-circle", name: "gg-circle" },
            { class: "fa fa-ghost", name: "ghost" },
            { class: "fa fa-gift", name: "gift" },
            { class: "fa fa-gifts", name: "gifts" },
            { class: "fa fa-git", name: "git" },
            { class: "fab fa-git-alt", name: "git-alt" },
            { class: "fa fa-git-square", name: "git-square" },
            { class: "fa fa-github", name: "github" },
            { class: "fa fa-github-alt", name: "github-alt" },
            { class: "fa fa-github-square", name: "github-square" },
            { class: "fab fa-gitkraken", name: "gitkraken" },
            { class: "fa fa-gitlab", name: "gitlab" },
            { class: "fab fa-gitter", name: "gitter" },
            { class: "fa fa-glass-cheers", name: "glass-cheers" },
            { class: "fa fa-glass-martini", name: "glass-martini" },
            { class: "fa fa-glass-martini-alt", name: "glass-martini-alt" },
            { class: "fa fa-glass-whiskey", name: "glass-whiskey" },
            { class: "fa fa-glasses", name: "glasses" },
            { class: "fa fa-glide", name: "glide" },
            { class: "fa fa-glide-g", name: "glide-g" },
            { class: "fa fa-globe", name: "globe" },
            { class: "fa fa-globe-africa", name: "globe-africa" },
            { class: "fa fa-globe-americas", name: "globe-americas" },
            { class: "fa fa-globe-asia", name: "globe-asia" },
            { class: "fa fa-globe-europe", name: "globe-europe" },
            { class: "fab fa-gofore", name: "gofore" },
            { class: "fa fa-golf-ball", name: "golf-ball" },
            { class: "fab fa-goodreads", name: "goodreads" },
            { class: "fab fa-goodreads-g", name: "goodreads-g" },
            { class: "fa fa-google", name: "google" },
            { class: "fab fa-google-drive", name: "google-drive" },
            { class: "fab fa-google-pay", name: "google-pay" },
            { class: "fab fa-google-play", name: "google-play" },
            { class: "fa fa-google-plus", name: "google-plus" },
            { class: "fab fa-google-plus-g", name: "google-plus-g" },
            { class: "fa fa-google-plus-square", name: "google-plus-square" },
            { class: "fa fa-google-wallet", name: "google-wallet" },
            { class: "fa fa-gopuram", name: "gopuram" },
            { class: "fa fa-graduation-cap", name: "graduation-cap" },
            { class: "fa fa-gratipay", name: "gratipay" },
            { class: "fa fa-grav", name: "grav" },
            { class: "fa fa-greater-than", name: "greater-than" },
            { class: "fa fa-greater-than-equal", name: "greater-than-equal" },
            { class: "fa fa-grimace", name: "grimace" },
            { class: "fa fa-grin", name: "grin" },
            { class: "fa fa-grin-alt", name: "grin-alt" },
            { class: "fa fa-grin-beam", name: "grin-beam" },
            { class: "fa fa-grin-beam-sweat", name: "grin-beam-sweat" },
            { class: "fa fa-grin-hearts", name: "grin-hearts" },
            { class: "fa fa-grin-squint", name: "grin-squint" },
            { class: "fa fa-grin-squint-tears", name: "grin-squint-tears" },
            { class: "fa fa-grin-stars", name: "grin-stars" },
            { class: "fa fa-grin-tears", name: "grin-tears" },
            { class: "fa fa-grin-tongue", name: "grin-tongue" },
            { class: "fa fa-grin-tongue-squint", name: "grin-tongue-squint" },
            { class: "fa fa-grin-tongue-wink", name: "grin-tongue-wink" },
            { class: "fa fa-grin-wink", name: "grin-wink" },
            { class: "fa fa-grip-horizontal", name: "grip-horizontal" },
            { class: "fa fa-grip-lines", name: "grip-lines" },
            { class: "fa fa-grip-lines-vertical", name: "grip-lines-vertical" },
            { class: "fa fa-grip-vertical", name: "grip-vertical" },
            { class: "fab fa-gripfire", name: "gripfire" },
            { class: "fab fa-grunt", name: "grunt" },
            { class: "fab fa-guilded", name: "guilded" },
            { class: "fa fa-guitar", name: "guitar" },
            { class: "fab fa-gulp", name: "gulp" },
            { class: "fa fa-h-square", name: "h-square" },
            { class: "fa fa-hacker-news", name: "hacker-news" },
            { class: "fab fa-hacker-news-square", name: "hacker-news-square" },
            { class: "fab fa-hackerrank", name: "hackerrank" },
            { class: "fa fa-hamburger", name: "hamburger" },
            { class: "fa fa-hammer", name: "hammer" },
            { class: "fa fa-hamsa", name: "hamsa" },
            { class: "fa fa-hand-holding", name: "hand-holding" },
            { class: "fa fa-hand-holding-heart", name: "hand-holding-heart" },
            { class: "fa fa-hand-holding-medical", name: "hand-holding-medical" },
            { class: "fa fa-hand-holding-usd", name: "hand-holding-usd" },
            { class: "fa fa-hand-holding-water", name: "hand-holding-water" },
            { class: "fa fa-hand-lizard", name: "hand-lizard" },
            { class: "fa fa-hand-middle-finger", name: "hand-middle-finger" },
            { class: "fa fa-hand-paper", name: "hand-paper" },
            { class: "fa fa-hand-peace", name: "hand-peace" },
            { class: "fa fa-hand-point-down", name: "hand-point-down" },
            { class: "fa fa-hand-point-left", name: "hand-point-left" },
            { class: "fa fa-hand-point-right", name: "hand-point-right" },
            { class: "fa fa-hand-point-up", name: "hand-point-up" },
            { class: "fa fa-hand-pointer", name: "hand-pointer" },
            { class: "fa fa-hand-rock", name: "hand-rock" },
            { class: "fa fa-hand-scissors", name: "hand-scissors" },
            { class: "fa fa-hand-sparkles", name: "hand-sparkles" },
            { class: "fa fa-hand-spock", name: "hand-spock" },
            { class: "fa fa-hands", name: "hands" },
            { class: "fa fa-hands-helping", name: "hands-helping" },
            { class: "fa fa-hands-wash", name: "hands-wash" },
            { class: "fa fa-handshake", name: "handshake" },
            { class: "fa fa-handshake-alt-slash", name: "handshake-alt-slash" },
            { class: "fa fa-handshake-slash", name: "handshake-slash" },
            { class: "fa fa-hanukiah", name: "hanukiah" },
            { class: "fa fa-hard-hat", name: "hard-hat" },
            { class: "fa fa-hashtag", name: "hashtag" },
            { class: "fa fa-hat-cowboy", name: "hat-cowboy" },
            { class: "fa fa-hat-cowboy-side", name: "hat-cowboy-side" },
            { class: "fa fa-hat-wizard", name: "hat-wizard" },
            { class: "fa fa-hdd", name: "hdd" },
            { class: "fa fa-head-side-cough", name: "head-side-cough" },
            { class: "fa fa-head-side-cough-slash", name: "head-side-cough-slash" },
            { class: "fa fa-head-side-mask", name: "head-side-mask" },
            { class: "fa fa-head-side-virus", name: "head-side-virus" },
            { class: "fa fa-heading", name: "heading" },
            { class: "fa fa-headphones", name: "headphones" },
            { class: "fa fa-headphones-alt", name: "headphones-alt" },
            { class: "fa fa-headset", name: "headset" },
            { class: "fa fa-heart", name: "heart" },
            { class: "fa fa-heart-broken", name: "heart-broken" },
            { class: "fa fa-heartbeat", name: "heartbeat" },
            { class: "fa fa-helicopter", name: "helicopter" },
            { class: "fa fa-highlighter", name: "highlighter" },
            { class: "fa fa-hiking", name: "hiking" },
            { class: "fa fa-hippo", name: "hippo" },
            { class: "fab fa-hips", name: "hips" },
            { class: "fab fa-hire-a-helper", name: "hire-a-helper" },
            { class: "fa fa-history", name: "history" },
            { class: "fab fa-hive", name: "hive" },
            { class: "fa fa-hockey-puck", name: "hockey-puck" },
            { class: "fa fa-holly-berry", name: "holly-berry" },
            { class: "fa fa-home", name: "home" },
            { class: "fab fa-hooli", name: "hooli" },
            { class: "fab fa-hornbill", name: "hornbill" },
            { class: "fa fa-horse", name: "horse" },
            { class: "fa fa-horse-head", name: "horse-head" },
            { class: "fa fa-hospital", name: "hospital" },
            { class: "fa fa-hospital-alt", name: "hospital-alt" },
            { class: "fa fa-hospital-symbol", name: "hospital-symbol" },
            { class: "fa fa-hospital-user", name: "hospital-user" },
            { class: "fa fa-hot-tub", name: "hot-tub" },
            { class: "fa fa-hotdog", name: "hotdog" },
            { class: "fa fa-hotel", name: "hotel" },
            { class: "fab fa-hotjar", name: "hotjar" },
            { class: "fa fa-hourglass", name: "hourglass" },
            { class: "fa fa-hourglass-end", name: "hourglass-end" },
            { class: "fa fa-hourglass-half", name: "hourglass-half" },
            { class: "fa fa-hourglass-start", name: "hourglass-start" },
            { class: "fa fa-house-damage", name: "house-damage" },
            { class: "fa fa-house-user", name: "house-user" },
            { class: "fa fa-houzz", name: "houzz" },
            { class: "fa fa-hryvnia", name: "hryvnia" },
            { class: "fa fa-html5", name: "html5" },
            { class: "fab fa-hubspot", name: "hubspot" },
            { class: "fa fa-i-cursor", name: "i-cursor" },
            { class: "fa fa-ice-cream", name: "ice-cream" },
            { class: "fa fa-icicles", name: "icicles" },
            { class: "fa fa-icons", name: "icons" },
            { class: "fa fa-id-badge", name: "id-badge" },
            { class: "fa fa-id-card", name: "id-card" },
            { class: "fa fa-id-card-alt", name: "id-card-alt" },
            { class: "fab fa-ideal", name: "ideal" },
            { class: "fa fa-igloo", name: "igloo" },
            { class: "fa fa-image", name: "image" },
            { class: "fa fa-images", name: "images" },
            { class: "fa fa-imdb", name: "imdb" },
            { class: "fa fa-inbox", name: "inbox" },
            { class: "fa fa-indent", name: "indent" },
            { class: "fa fa-industry", name: "industry" },
            { class: "fa fa-infinity", name: "infinity" },
            { class: "fa fa-info", name: "info" },
            { class: "fa fa-info-circle", name: "info-circle" },
            { class: "fab fa-innosoft", name: "innosoft" },
            { class: "fa fa-instagram", name: "instagram" },
            { class: "fab fa-instagram-square", name: "instagram-square" },
            { class: "fab fa-instalod", name: "instalod" },
            { class: "fab fa-intercom", name: "intercom" },
            { class: "fa fa-internet-explorer", name: "internet-explorer" },
            { class: "fab fa-invision", name: "invision" },
            { class: "fa fa-ioxhost", name: "ioxhost" },
            { class: "fa fa-italic", name: "italic" },
            { class: "fab fa-itch-io", name: "itch-io" },
            { class: "fab fa-itunes", name: "itunes" },
            { class: "fab fa-itunes-note", name: "itunes-note" },
            { class: "fab fa-java", name: "java" },
            { class: "fa fa-jedi", name: "jedi" },
            { class: "fab fa-jedi-order", name: "jedi-order" },
            { class: "fab fa-jenkins", name: "jenkins" },
            { class: "fab fa-jira", name: "jira" },
            { class: "fab fa-joget", name: "joget" },
            { class: "fa fa-joint", name: "joint" },
            { class: "fa fa-joomla", name: "joomla" },
            { class: "fa fa-journal-whills", name: "journal-whills" },
            { class: "fab fa-js", name: "js" },
            { class: "fab fa-js-square", name: "js-square" },
            { class: "fa fa-jsfiddle", name: "jsfiddle" },
            { class: "fa fa-kaaba", name: "kaaba" },
            { class: "fab fa-kaggle", name: "kaggle" },
            { class: "fa fa-key", name: "key" },
            { class: "fab fa-keybase", name: "keybase" },
            { class: "fa fa-keyboard", name: "keyboard" },
            { class: "fab fa-keycdn", name: "keycdn" },
            { class: "fa fa-khanda", name: "khanda" },
            { class: "fab fa-kickstarter", name: "kickstarter" },
            { class: "fab fa-kickstarter-k", name: "kickstarter-k" },
            { class: "fa fa-kiss", name: "kiss" },
            { class: "fa fa-kiss-beam", name: "kiss-beam" },
            { class: "fa fa-kiss-wink-heart", name: "kiss-wink-heart" },
            { class: "fa fa-kiwi-bird", name: "kiwi-bird" },
            { class: "fab fa-korvue", name: "korvue" },
            { class: "fa fa-landmark", name: "landmark" },
            { class: "fa fa-language", name: "language" },
            { class: "fa fa-laptop", name: "laptop" },
            { class: "fa fa-laptop-code", name: "laptop-code" },
            { class: "fa fa-laptop-house", name: "laptop-house" },
            { class: "fa fa-laptop-medical", name: "laptop-medical" },
            { class: "fab fa-laravel", name: "laravel" },
            { class: "fa fa-lastfm", name: "lastfm" },
            { class: "fa fa-lastfm-square", name: "lastfm-square" },
            { class: "fa fa-laugh", name: "laugh" },
            { class: "fa fa-laugh-beam", name: "laugh-beam" },
            { class: "fa fa-laugh-squint", name: "laugh-squint" },
            { class: "fa fa-laugh-wink", name: "laugh-wink" },
            { class: "fa fa-layer-group", name: "layer-group" },
            { class: "fa fa-leaf", name: "leaf" },
            { class: "fa fa-leanpub", name: "leanpub" },
            { class: "fa fa-lemon", name: "lemon" },
            { class: "fab fa-less", name: "less" },
            { class: "fa fa-less-than", name: "less-than" },
            { class: "fa fa-less-than-equal", name: "less-than-equal" },
            { class: "fa fa-level-down-alt", name: "level-down-alt" },
            { class: "fa fa-level-up-alt", name: "level-up-alt" },
            { class: "fa fa-life-ring", name: "life-ring" },
            { class: "fa fa-lightbulb", name: "lightbulb" },
            { class: "fab fa-line", name: "line" },
            { class: "fa fa-link", name: "link" },
            { class: "fa fa-linkedin", name: "linkedin" },
            { class: "fab fa-linkedin-in", name: "linkedin-in" },
            { class: "fa fa-linode", name: "linode" },
            { class: "fa fa-linux", name: "linux" },
            { class: "fa fa-lira-sign", name: "lira-sign" },
            { class: "fa fa-list", name: "list" },
            { class: "fa fa-list-alt", name: "list-alt" },
            { class: "fa fa-list-ol", name: "list-ol" },
            { class: "fa fa-list-ul", name: "list-ul" },
            { class: "fa fa-location-arrow", name: "location-arrow" },
            { class: "fa fa-lock", name: "lock" },
            { class: "fa fa-lock-open", name: "lock-open" },
            { class: "fa fa-long-arrow-alt-down", name: "long-arrow-alt-down" },
            { class: "fa fa-long-arrow-alt-left", name: "long-arrow-alt-left" },
            { class: "fa fa-long-arrow-alt-right", name: "long-arrow-alt-right" },
            { class: "fa fa-long-arrow-alt-up", name: "long-arrow-alt-up" },
            { class: "fa fa-low-vision", name: "low-vision" },
            { class: "fa fa-luggage-cart", name: "luggage-cart" },
            { class: "fa fa-lungs", name: "lungs" },
            { class: "fa fa-lungs-virus", name: "lungs-virus" },
            { class: "fab fa-lyft", name: "lyft" },
            { class: "fab fa-magento", name: "magento" },
            { class: "fa fa-magic", name: "magic" },
            { class: "fa fa-magnet", name: "magnet" },
            { class: "fa fa-mail-bulk", name: "mail-bulk" },
            { class: "fab fa-mailchimp", name: "mailchimp" },
            { class: "fa fa-male", name: "male" },
            { class: "fab fa-mandalorian", name: "mandalorian" },
            { class: "fa fa-map", name: "map" },
            { class: "fa fa-map-marked", name: "map-marked" },
            { class: "fa fa-map-marked-alt", name: "map-marked-alt" },
            { class: "fa fa-map-marker", name: "map-marker" },
            { class: "fa fa-map-marker-alt", name: "map-marker-alt" },
            { class: "fa fa-map-pin", name: "map-pin" },
            { class: "fa fa-map-signs", name: "map-signs" },
            { class: "fab fa-markdown", name: "markdown" },
            { class: "fa fa-marker", name: "marker" },
            { class: "fa fa-mars", name: "mars" },
            { class: "fa fa-mars-double", name: "mars-double" },
            { class: "fa fa-mars-stroke", name: "mars-stroke" },
            { class: "fa fa-mars-stroke-h", name: "mars-stroke-h" },
            { class: "fa fa-mars-stroke-v", name: "mars-stroke-v" },
            { class: "fa fa-mask", name: "mask" },
            { class: "fab fa-mastodon", name: "mastodon" },
            { class: "fa fa-maxcdn", name: "maxcdn" },
            { class: "fab fa-mdb", name: "mdb" },
            { class: "fa fa-medal", name: "medal" },
            { class: "fab fa-medapps", name: "medapps" },
            { class: "fa fa-medium", name: "medium" },
            { class: "fab fa-medium-m", name: "medium-m" },
            { class: "fa fa-medkit", name: "medkit" },
            { class: "fab fa-medrt", name: "medrt" },
            { class: "fa fa-meetup", name: "meetup" },
            { class: "fab fa-megaport", name: "megaport" },
            { class: "fa fa-meh", name: "meh" },
            { class: "fa fa-meh-blank", name: "meh-blank" },
            { class: "fa fa-meh-rolling-eyes", name: "meh-rolling-eyes" },
            { class: "fa fa-memory", name: "memory" },
            { class: "fab fa-mendeley", name: "mendeley" },
            { class: "fa fa-menorah", name: "menorah" },
            { class: "fa fa-mercury", name: "mercury" },
            { class: "fa fa-meteor", name: "meteor" },
            { class: "fab fa-microblog", name: "microblog" },
            { class: "fa fa-microchip", name: "microchip" },
            { class: "fa fa-microphone", name: "microphone" },
            { class: "fa fa-microphone-alt", name: "microphone-alt" },
            { class: "fa fa-microphone-alt-slash", name: "microphone-alt-slash" },
            { class: "fa fa-microphone-slash", name: "microphone-slash" },
            { class: "fa fa-microscope", name: "microscope" },
            { class: "fab fa-microsoft", name: "microsoft" },
            { class: "fa fa-minus", name: "minus" },
            { class: "fa fa-minus-circle", name: "minus-circle" },
            { class: "fa fa-minus-square", name: "minus-square" },
            { class: "fa fa-mitten", name: "mitten" },
            { class: "fab fa-mix", name: "mix" },
            { class: "fa fa-mixcloud", name: "mixcloud" },
            { class: "fab fa-mixer", name: "mixer" },
            { class: "fab fa-mizuni", name: "mizuni" },
            { class: "fa fa-mobile", name: "mobile" },
            { class: "fa fa-mobile-alt", name: "mobile-alt" },
            { class: "fa fa-modx", name: "modx" },
            { class: "fab fa-monero", name: "monero" },
            { class: "fa fa-money-bill", name: "money-bill" },
            { class: "fa fa-money-bill-alt", name: "money-bill-alt" },
            { class: "fa fa-money-bill-wave", name: "money-bill-wave" },
            { class: "fa fa-money-bill-wave-alt", name: "money-bill-wave-alt" },
            { class: "fa fa-money-check", name: "money-check" },
            { class: "fa fa-money-check-alt", name: "money-check-alt" },
            { class: "fa fa-monument", name: "monument" },
            { class: "fa fa-moon", name: "moon" },
            { class: "fa fa-mortar-pestle", name: "mortar-pestle" },
            { class: "fa fa-mosque", name: "mosque" },
            { class: "fa fa-motorcycle", name: "motorcycle" },
            { class: "fa fa-mountain", name: "mountain" },
            { class: "fa fa-mouse", name: "mouse" },
            { class: "fa fa-mouse-pointer", name: "mouse-pointer" },
            { class: "fa fa-mug-hot", name: "mug-hot" },
            { class: "fa fa-music", name: "music" },
            { class: "fab fa-napster", name: "napster" },
            { class: "fab fa-neos", name: "neos" },
            { class: "fa fa-network-wired", name: "network-wired" },
            { class: "fa fa-neuter", name: "neuter" },
            { class: "fa fa-newspaper", name: "newspaper" },
            { class: "fab fa-nimblr", name: "nimblr" },
            { class: "fab fa-node", name: "node" },
            { class: "fab fa-node-js", name: "node-js" },
            { class: "fa fa-not-equal", name: "not-equal" },
            { class: "fa fa-notes-medical", name: "notes-medical" },
            { class: "fab fa-npm", name: "npm" },
            { class: "fab fa-ns8", name: "ns8" },
            { class: "fab fa-nutritionix", name: "nutritionix" },
            { class: "fa fa-object-group", name: "object-group" },
            { class: "fa fa-object-ungroup", name: "object-ungroup" },
            { class: "fab fa-octopus-deploy", name: "octopus-deploy" },
            { class: "fa fa-odnoklassniki", name: "odnoklassniki" },
            { class: "fa fa-odnoklassniki-square", name: "odnoklassniki-square" },
            { class: "fa fa-oil-can", name: "oil-can" },
            { class: "fab fa-old-republic", name: "old-republic" },
            { class: "fa fa-opencart", name: "opencart" },
            { class: "fa fa-openid", name: "openid" },
            { class: "fa fa-opera", name: "opera" },
            { class: "fa fa-optin-monster", name: "optin-monster" },
            { class: "fab fa-orcid", name: "orcid" },
            { class: "fab fa-osi", name: "osi" },
            { class: "fa fa-otter", name: "otter" },
            { class: "fa fa-outdent", name: "outdent" },
            { class: "fab fa-page4", name: "page4" },
            { class: "fa fa-pagelines", name: "pagelines" },
            { class: "fa fa-pager", name: "pager" },
            { class: "fa fa-paint-brush", name: "paint-brush" },
            { class: "fa fa-paint-roller", name: "paint-roller" },
            { class: "fa fa-palette", name: "palette" },
            { class: "fab fa-palfed", name: "palfed" },
            { class: "fa fa-pallet", name: "pallet" },
            { class: "fa fa-paper-plane", name: "paper-plane" },
            { class: "fa fa-paperclip", name: "paperclip" },
            { class: "fa fa-parachute-box", name: "parachute-box" },
            { class: "fa fa-paragraph", name: "paragraph" },
            { class: "fa fa-parking", name: "parking" },
            { class: "fa fa-passport", name: "passport" },
            { class: "fa fa-pastafarianism", name: "pastafarianism" },
            { class: "fa fa-paste", name: "paste" },
            { class: "fab fa-patreon", name: "patreon" },
            { class: "fa fa-pause", name: "pause" },
            { class: "fa fa-pause-circle", name: "pause-circle" },
            { class: "fa fa-paw", name: "paw" },
            { class: "fa fa-paypal", name: "paypal" },
            { class: "fa fa-peace", name: "peace" },
            { class: "fa fa-pen", name: "pen" },
            { class: "fa fa-pen-alt", name: "pen-alt" },
            { class: "fa fa-pen-fancy", name: "pen-fancy" },
            { class: "fa fa-pen-nib", name: "pen-nib" },
            { class: "fa fa-pen-square", name: "pen-square" },
            { class: "fa fa-pencil-alt", name: "pencil-alt" },
            { class: "fa fa-pencil-ruler", name: "pencil-ruler" },
            { class: "fab fa-penny-arcade", name: "penny-arcade" },
            { class: "fa fa-people-arrows", name: "people-arrows" },
            { class: "fa fa-people-carry", name: "people-carry" },
            { class: "fa fa-pepper-hot", name: "pepper-hot" },
            { class: "fab fa-perbyte", name: "perbyte" },
            { class: "fa fa-percent", name: "percent" },
            { class: "fa fa-percentage", name: "percentage" },
            { class: "fab fa-periscope", name: "periscope" },
            { class: "fa fa-person-booth", name: "person-booth" },
            { class: "fab fa-phabricator", name: "phabricator" },
            { class: "fab fa-phoenix-framework", name: "phoenix-framework" },
            { class: "fab fa-phoenix-squadron", name: "phoenix-squadron" },
            { class: "fa fa-phone", name: "phone" },
            { class: "fa fa-phone-alt", name: "phone-alt" },
            { class: "fa fa-phone-slash", name: "phone-slash" },
            { class: "fa fa-phone-square", name: "phone-square" },
            { class: "fa fa-phone-square-alt", name: "phone-square-alt" },
            { class: "fa fa-phone-volume", name: "phone-volume" },
            { class: "fa fa-photo-video", name: "photo-video" },
            { class: "fab fa-php", name: "php" },
            { class: "fa fa-pied-piper", name: "pied-piper" },
            { class: "fa fa-pied-piper-alt", name: "pied-piper-alt" },
            { class: "fab fa-pied-piper-hat", name: "pied-piper-hat" },
            { class: "fa fa-pied-piper-pp", name: "pied-piper-pp" },
            { class: "fab fa-pied-piper-square", name: "pied-piper-square" },
            { class: "fa fa-piggy-bank", name: "piggy-bank" },
            { class: "fa fa-pills", name: "pills" },
            { class: "fa fa-pinterest", name: "pinterest" },
            { class: "fa fa-pinterest-p", name: "pinterest-p" },
            { class: "fa fa-pinterest-square", name: "pinterest-square" },
            { class: "fa fa-pizza-slice", name: "pizza-slice" },
            { class: "fa fa-place-of-worship", name: "place-of-worship" },
            { class: "fa fa-plane", name: "plane" },
            { class: "fa fa-plane-arrival", name: "plane-arrival" },
            { class: "fa fa-plane-departure", name: "plane-departure" },
            { class: "fa fa-plane-slash", name: "plane-slash" },
            { class: "fa fa-play", name: "play" },
            { class: "fa fa-play-circle", name: "play-circle" },
            { class: "fab fa-playstation", name: "playstation" },
            { class: "fa fa-plug", name: "plug" },
            { class: "fa fa-plus", name: "plus" },
            { class: "fa fa-plus-circle", name: "plus-circle" },
            { class: "fa fa-plus-square", name: "plus-square" },
            { class: "fa fa-podcast", name: "podcast" },
            { class: "fa fa-poll", name: "poll" },
            { class: "fa fa-poll-h", name: "poll-h" },
            { class: "fa fa-poo", name: "poo" },
            { class: "fa fa-poo-storm", name: "poo-storm" },
            { class: "fa fa-poop", name: "poop" },
            { class: "fa fa-portrait", name: "portrait" },
            { class: "fa fa-pound-sign", name: "pound-sign" },
            { class: "fa fa-power-off", name: "power-off" },
            { class: "fa fa-pray", name: "pray" },
            { class: "fa fa-praying-hands", name: "praying-hands" },
            { class: "fa fa-prescription", name: "prescription" },
            { class: "fa fa-prescription-bottle", name: "prescription-bottle" },
            { class: "fa fa-prescription-bottle-alt", name: "prescription-bottle-alt" },
            { class: "fa fa-print", name: "print" },
            { class: "fa fa-procedures", name: "procedures" },
            { class: "fa fa-product-hunt", name: "product-hunt" },
            { class: "fa fa-project-diagram", name: "project-diagram" },
            { class: "fa fa-pump-medical", name: "pump-medical" },
            { class: "fa fa-pump-soap", name: "pump-soap" },
            { class: "fab fa-pushed", name: "pushed" },
            { class: "fa fa-puzzle-piece", name: "puzzle-piece" },
            { class: "fab fa-python", name: "python" },
            { class: "fa fa-qq", name: "qq" },
            { class: "fa fa-qrcode", name: "qrcode" },
            { class: "fa fa-question", name: "question" },
            { class: "fa fa-question-circle", name: "question-circle" },
            { class: "fa fa-quidditch", name: "quidditch" },
            { class: "fab fa-quinscape", name: "quinscape" },
            { class: "fa fa-quora", name: "quora" },
            { class: "fa fa-quote-left", name: "quote-left" },
            { class: "fa fa-quote-right", name: "quote-right" },
            { class: "fa fa-quran", name: "quran" },
            { class: "fab fa-r-project", name: "r-project" },
            { class: "fa fa-radiation", name: "radiation" },
            { class: "fa fa-radiation-alt", name: "radiation-alt" },
            { class: "fa fa-rainbow", name: "rainbow" },
            { class: "fa fa-random", name: "random" },
            { class: "fab fa-raspberry-pi", name: "raspberry-pi" },
            { class: "fa fa-ravelry", name: "ravelry" },
            { class: "fab fa-react", name: "react" },
            { class: "fab fa-reacteurope", name: "reacteurope" },
            { class: "fab fa-readme", name: "readme" },
            { class: "fa fa-rebel", name: "rebel" },
            { class: "fa fa-receipt", name: "receipt" },
            { class: "fa fa-record-vinyl", name: "record-vinyl" },
            { class: "fa fa-recycle", name: "recycle" },
            { class: "fab fa-red-river", name: "red-river" },
            { class: "fa fa-reddit", name: "reddit" },
            { class: "fa fa-reddit-alien", name: "reddit-alien" },
            { class: "fa fa-reddit-square", name: "reddit-square" },
            { class: "fab fa-redhat", name: "redhat" },
            { class: "fa fa-redo", name: "redo" },
            { class: "fa fa-redo-alt", name: "redo-alt" },
            { class: "fa fa-registered", name: "registered" },
            { class: "fa fa-remove-format", name: "remove-format" },
            { class: "fa fa-renren", name: "renren" },
            { class: "fa fa-reply", name: "reply" },
            { class: "fa fa-reply-all", name: "reply-all" },
            { class: "fab fa-replyd", name: "replyd" },
            { class: "fa fa-republican", name: "republican" },
            { class: "fab fa-researchgate", name: "researchgate" },
            { class: "fab fa-resolving", name: "resolving" },
            { class: "fa fa-restroom", name: "restroom" },
            { class: "fa fa-retweet", name: "retweet" },
            { class: "fab fa-rev", name: "rev" },
            { class: "fa fa-ribbon", name: "ribbon" },
            { class: "fa fa-ring", name: "ring" },
            { class: "fa fa-road", name: "road" },
            { class: "fa fa-robot", name: "robot" },
            { class: "fa fa-rocket", name: "rocket" },
            { class: "fab fa-rocketchat", name: "rocketchat" },
            { class: "fab fa-rockrms", name: "rockrms" },
            { class: "fa fa-route", name: "route" },
            { class: "fa fa-rss", name: "rss" },
            { class: "fa fa-rss-square", name: "rss-square" },
            { class: "fa fa-ruble-sign", name: "ruble-sign" },
            { class: "fa fa-ruler", name: "ruler" },
            { class: "fa fa-ruler-combined", name: "ruler-combined" },
            { class: "fa fa-ruler-horizontal", name: "ruler-horizontal" },
            { class: "fa fa-ruler-vertical", name: "ruler-vertical" },
            { class: "fa fa-running", name: "running" },
            { class: "fa fa-rupee-sign", name: "rupee-sign" },
            { class: "fab fa-rust", name: "rust" },
            { class: "fa fa-sad-cry", name: "sad-cry" },
            { class: "fa fa-sad-tear", name: "sad-tear" },
            { class: "fa fa-safari", name: "safari" },
            { class: "fab fa-salesforce", name: "salesforce" },
            { class: "fab fa-sass", name: "sass" },
            { class: "fa fa-satellite", name: "satellite" },
            { class: "fa fa-satellite-dish", name: "satellite-dish" },
            { class: "fa fa-save", name: "save" },
            { class: "fab fa-schlix", name: "schlix" },
            { class: "fa fa-school", name: "school" },
            { class: "fa fa-screwdriver", name: "screwdriver" },
            { class: "fa fa-scribd", name: "scribd" },
            { class: "fa fa-scroll", name: "scroll" },
            { class: "fa fa-sd-card", name: "sd-card" },
            { class: "fa fa-search", name: "search" },
            { class: "fa fa-search-dollar", name: "search-dollar" },
            { class: "fa fa-search-location", name: "search-location" },
            { class: "fa fa-search-minus", name: "search-minus" },
            { class: "fa fa-search-plus", name: "search-plus" },
            { class: "fab fa-searchengin", name: "searchengin" },
            { class: "fa fa-seedling", name: "seedling" },
            { class: "fab fa-sellcast", name: "sellcast" },
            { class: "fa fa-sellsy", name: "sellsy" },
            { class: "fa fa-server", name: "server" },
            { class: "fab fa-servicestack", name: "servicestack" },
            { class: "fa fa-shapes", name: "shapes" },
            { class: "fa fa-share", name: "share" },
            { class: "fa fa-share-alt", name: "share-alt" },
            { class: "fa fa-share-alt-square", name: "share-alt-square" },
            { class: "fa fa-share-square", name: "share-square" },
            { class: "fa fa-shekel-sign", name: "shekel-sign" },
            { class: "fa fa-shield-alt", name: "shield-alt" },
            { class: "fa fa-shield-virus", name: "shield-virus" },
            { class: "fa fa-ship", name: "ship" },
            { class: "fa fa-shipping-fast", name: "shipping-fast" },
            { class: "fa fa-shirtsinbulk", name: "shirtsinbulk" },
            { class: "fa fa-shoe-prints", name: "shoe-prints" },
            { class: "fab fa-shopify", name: "shopify" },
            { class: "fa fa-shopping-bag", name: "shopping-bag" },
            { class: "fa fa-shopping-basket", name: "shopping-basket" },
            { class: "fa fa-shopping-cart", name: "shopping-cart" },
            { class: "fab fa-shopware", name: "shopware" },
            { class: "fa fa-shower", name: "shower" },
            { class: "fa fa-shuttle-van", name: "shuttle-van" },
            { class: "fa fa-sign", name: "sign" },
            { class: "fa fa-sign-in-alt", name: "sign-in-alt" },
            { class: "fa fa-sign-language", name: "sign-language" },
            { class: "fa fa-sign-out-alt", name: "sign-out-alt" },
            { class: "fa fa-signal", name: "signal" },
            { class: "fa fa-signature", name: "signature" },
            { class: "fa fa-sim-card", name: "sim-card" },
            { class: "fa fa-simplybuilt", name: "simplybuilt" },
            { class: "fa fa-sink", name: "sink" },
            { class: "fab fa-sistrix", name: "sistrix" },
            { class: "fa fa-sitemap", name: "sitemap" },
            { class: "fab fa-sith", name: "sith" },
            { class: "fa fa-skating", name: "skating" },
            { class: "fab fa-sketch", name: "sketch" },
            { class: "fa fa-skiing", name: "skiing" },
            { class: "fa fa-skiing-nordic", name: "skiing-nordic" },
            { class: "fa fa-skull", name: "skull" },
            { class: "fa fa-skull-crossbones", name: "skull-crossbones" },
            { class: "fa fa-skyatlas", name: "skyatlas" },
            { class: "fa fa-skype", name: "skype" },
            { class: "fa fa-slack", name: "slack" },
            { class: "fab fa-slack-hash", name: "slack-hash" },
            { class: "fa fa-slash", name: "slash" },
            { class: "fa fa-sleigh", name: "sleigh" },
            { class: "fa fa-sliders-h", name: "sliders-h" },
            { class: "fa fa-slideshare", name: "slideshare" },
            { class: "fa fa-smile", name: "smile" },
            { class: "fa fa-smile-beam", name: "smile-beam" },
            { class: "fa fa-smile-wink", name: "smile-wink" },
            { class: "fa fa-smog", name: "smog" },
            { class: "fa fa-smoking", name: "smoking" },
            { class: "fa fa-smoking-ban", name: "smoking-ban" },
            { class: "fa fa-sms", name: "sms" },
            { class: "fa fa-snapchat", name: "snapchat" },
            { class: "fa fa-snapchat-ghost", name: "snapchat-ghost" },
            { class: "fa fa-snapchat-square", name: "snapchat-square" },
            { class: "fa fa-snowboarding", name: "snowboarding" },
            { class: "fa fa-snowflake", name: "snowflake" },
            { class: "fa fa-snowman", name: "snowman" },
            { class: "fa fa-snowplow", name: "snowplow" },
            { class: "fa fa-soap", name: "soap" },
            { class: "fa fa-socks", name: "socks" },
            { class: "fa fa-solar-panel", name: "solar-panel" },
            { class: "fa fa-sort", name: "sort" },
            { class: "fa fa-sort-alpha-down", name: "sort-alpha-down" },
            { class: "fa fa-sort-alpha-down-alt", name: "sort-alpha-down-alt" },
            { class: "fa fa-sort-alpha-up", name: "sort-alpha-up" },
            { class: "fa fa-sort-alpha-up-alt", name: "sort-alpha-up-alt" },
            { class: "fa fa-sort-amount-down", name: "sort-amount-down" },
            { class: "fa fa-sort-amount-down-alt", name: "sort-amount-down-alt" },
            { class: "fa fa-sort-amount-up", name: "sort-amount-up" },
            { class: "fa fa-sort-amount-up-alt", name: "sort-amount-up-alt" },
            { class: "fa fa-sort-down", name: "sort-down" },
            { class: "fa fa-sort-numeric-down", name: "sort-numeric-down" },
            { class: "fa fa-sort-numeric-down-alt", name: "sort-numeric-down-alt" },
            { class: "fa fa-sort-numeric-up", name: "sort-numeric-up" },
            { class: "fa fa-sort-numeric-up-alt", name: "sort-numeric-up-alt" },
            { class: "fa fa-sort-up", name: "sort-up" },
            { class: "fa fa-soundcloud", name: "soundcloud" },
            { class: "fab fa-sourcetree", name: "sourcetree" },
            { class: "fa fa-spa", name: "spa" },
            { class: "fa fa-space-shuttle", name: "space-shuttle" },
            { class: "fab fa-speakap", name: "speakap" },
            { class: "fab fa-speaker-deck", name: "speaker-deck" },
            { class: "fa fa-spell-check", name: "spell-check" },
            { class: "fa fa-spider", name: "spider" },
            { class: "fa fa-spinner", name: "spinner" },
            { class: "fa fa-splotch", name: "splotch" },
            { class: "fa fa-spotify", name: "spotify" },
            { class: "fa fa-spray-can", name: "spray-can" },
            { class: "fa fa-square", name: "square" },
            { class: "fa fa-square-full", name: "square-full" },
            { class: "fa fa-square-root-alt", name: "square-root-alt" },
            { class: "fab fa-squarespace", name: "squarespace" },
            { class: "fa fa-stack-exchange", name: "stack-exchange" },
            { class: "fa fa-stack-overflow", name: "stack-overflow" },
            { class: "fab fa-stackpath", name: "stackpath" },
            { class: "fa fa-stamp", name: "stamp" },
            { class: "fa fa-star", name: "star" },
            { class: "fa fa-star-and-crescent", name: "star-and-crescent" },
            { class: "fa fa-star-half", name: "star-half" },
            { class: "fa fa-star-half-alt", name: "star-half-alt" },
            { class: "fa fa-star-of-david", name: "star-of-david" },
            { class: "fa fa-star-of-life", name: "star-of-life" },
            { class: "fab fa-staylinked", name: "staylinked" },
            { class: "fa fa-steam", name: "steam" },
            { class: "fa fa-steam-square", name: "steam-square" },
            { class: "fab fa-steam-symbol", name: "steam-symbol" },
            { class: "fa fa-step-backward", name: "step-backward" },
            { class: "fa fa-step-forward", name: "step-forward" },
            { class: "fa fa-stethoscope", name: "stethoscope" },
            { class: "fab fa-sticker-mule", name: "sticker-mule" },
            { class: "fa fa-sticky-note", name: "sticky-note" },
            { class: "fa fa-stop", name: "stop" },
            { class: "fa fa-stop-circle", name: "stop-circle" },
            { class: "fa fa-stopwatch", name: "stopwatch" },
            { class: "fa fa-stopwatch-20", name: "stopwatch-20" },
            { class: "fa fa-store", name: "store" },
            { class: "fa fa-store-alt", name: "store-alt" },
            { class: "fa fa-store-alt-slash", name: "store-alt-slash" },
            { class: "fa fa-store-slash", name: "store-slash" },
            { class: "fab fa-strava", name: "strava" },
            { class: "fa fa-stream", name: "stream" },
            { class: "fa fa-street-view", name: "street-view" },
            { class: "fa fa-strikethrough", name: "strikethrough" },
            { class: "fab fa-stripe", name: "stripe" },
            { class: "fab fa-stripe-s", name: "stripe-s" },
            { class: "fa fa-stroopwafel", name: "stroopwafel" },
            { class: "fab fa-studiovinari", name: "studiovinari" },
            { class: "fa fa-stumbleupon", name: "stumbleupon" },
            { class: "fa fa-stumbleupon-circle", name: "stumbleupon-circle" },
            { class: "fa fa-subscript", name: "subscript" },
            { class: "fa fa-subway", name: "subway" },
            { class: "fa fa-suitcase", name: "suitcase" },
            { class: "fa fa-suitcase-rolling", name: "suitcase-rolling" },
            { class: "fa fa-sun", name: "sun" },
            { class: "fa fa-superpowers", name: "superpowers" },
            { class: "fa fa-superscript", name: "superscript" },
            { class: "fab fa-supple", name: "supple" },
            { class: "fa fa-surprise", name: "surprise" },
            { class: "fab fa-suse", name: "suse" },
            { class: "fa fa-swatchbook", name: "swatchbook" },
            { class: "fab fa-swift", name: "swift" },
            { class: "fa fa-swimmer", name: "swimmer" },
            { class: "fa fa-swimming-pool", name: "swimming-pool" },
            { class: "fab fa-symfony", name: "symfony" },
            { class: "fa fa-synagogue", name: "synagogue" },
            { class: "fa fa-sync", name: "sync" },
            { class: "fa fa-sync-alt", name: "sync-alt" },
            { class: "fa fa-syringe", name: "syringe" },
            { class: "fa fa-table", name: "table" },
            { class: "fa fa-table-tennis", name: "table-tennis" },
            { class: "fa fa-tablet", name: "tablet" },
            { class: "fa fa-tablet-alt", name: "tablet-alt" },
            { class: "fa fa-tablets", name: "tablets" },
            { class: "fa fa-tachometer-alt", name: "tachometer-alt" },
            { class: "fa fa-tag", name: "tag" },
            { class: "fa fa-tags", name: "tags" },
            { class: "fa fa-tape", name: "tape" },
            { class: "fa fa-tasks", name: "tasks" },
            { class: "fa fa-taxi", name: "taxi" },
            { class: "fab fa-teamspeak", name: "teamspeak" },
            { class: "fa fa-teeth", name: "teeth" },
            { class: "fa fa-teeth-open", name: "teeth-open" },
            { class: "fa fa-telegram", name: "telegram" },
            { class: "fab fa-telegram-plane", name: "telegram-plane" },
            { class: "fa fa-temperature-high", name: "temperature-high" },
            { class: "fa fa-temperature-low", name: "temperature-low" },
            { class: "fa fa-tencent-weibo", name: "tencent-weibo" },
            { class: "fa fa-tenge", name: "tenge" },
            { class: "fa fa-terminal", name: "terminal" },
            { class: "fa fa-text-height", name: "text-height" },
            { class: "fa fa-text-width", name: "text-width" },
            { class: "fa fa-th", name: "th" },
            { class: "fa fa-th-large", name: "th-large" },
            { class: "fa fa-th-list", name: "th-list" },
            { class: "fab fa-the-red-yeti", name: "the-red-yeti" },
            { class: "fa fa-theater-masks", name: "theater-masks" },
            { class: "fab fa-themeco", name: "themeco" },
            { class: "fa fa-themeisle", name: "themeisle" },
            { class: "fa fa-thermometer", name: "thermometer" },
            { class: "fa fa-thermometer-empty", name: "thermometer-empty" },
            { class: "fa fa-thermometer-full", name: "thermometer-full" },
            { class: "fa fa-thermometer-half", name: "thermometer-half" },
            { class: "fa fa-thermometer-quarter", name: "thermometer-quarter" },
            { class: "fa fa-thermometer-three-quarters", name: "thermometer-three-quarters" },
            { class: "fab fa-think-peaks", name: "think-peaks" },
            { class: "fa fa-thumbs-down", name: "thumbs-down" },
            { class: "fa fa-thumbs-up", name: "thumbs-up" },
            { class: "fa fa-thumbtack", name: "thumbtack" },
            { class: "fa fa-ticket-alt", name: "ticket-alt" },
            { class: "fab fa-tiktok", name: "tiktok" },
            { class: "fa fa-times", name: "times" },
            { class: "fa fa-times-circle", name: "times-circle" },
            { class: "fa fa-tint", name: "tint" },
            { class: "fa fa-tint-slash", name: "tint-slash" },
            { class: "fa fa-tired", name: "tired" },
            { class: "fa fa-toggle-off", name: "toggle-off" },
            { class: "fa fa-toggle-on", name: "toggle-on" },
            { class: "fa fa-toilet", name: "toilet" },
            { class: "fa fa-toilet-paper", name: "toilet-paper" },
            { class: "fa fa-toilet-paper-slash", name: "toilet-paper-slash" },
            { class: "fa fa-toolbox", name: "toolbox" },
            { class: "fa fa-tools", name: "tools" },
            { class: "fa fa-tooth", name: "tooth" },
            { class: "fa fa-torah", name: "torah" },
            { class: "fa fa-torii-gate", name: "torii-gate" },
            { class: "fa fa-tractor", name: "tractor" },
            { class: "fab fa-trade-federation", name: "trade-federation" },
            { class: "fa fa-trademark", name: "trademark" },
            { class: "fa fa-traffic-light", name: "traffic-light" },
            { class: "fa fa-trailer", name: "trailer" },
            { class: "fa fa-train", name: "train" },
            { class: "fa fa-tram", name: "tram" },
            { class: "fa fa-transgender", name: "transgender" },
            { class: "fa fa-transgender-alt", name: "transgender-alt" },
            { class: "fa fa-trash", name: "trash" },
            { class: "fa fa-trash-alt", name: "trash-alt" },
            { class: "fa fa-trash-restore", name: "trash-restore" },
            { class: "fa fa-trash-restore-alt", name: "trash-restore-alt" },
            { class: "fa fa-tree", name: "tree" },
            { class: "fa fa-trello", name: "trello" },
            { class: "fa fa-tripadvisor", name: "tripadvisor" },
            { class: "fa fa-trophy", name: "trophy" },
            { class: "fa fa-truck", name: "truck" },
            { class: "fa fa-truck-loading", name: "truck-loading" },
            { class: "fa fa-truck-monster", name: "truck-monster" },
            { class: "fa fa-truck-moving", name: "truck-moving" },
            { class: "fa fa-truck-pickup", name: "truck-pickup" },
            { class: "fa fa-tshirt", name: "tshirt" },
            { class: "fa fa-tty", name: "tty" },
            { class: "fa fa-tumblr", name: "tumblr" },
            { class: "fa fa-tumblr-square", name: "tumblr-square" },
            { class: "fa fa-tv", name: "tv" },
            { class: "fa fa-twitch", name: "twitch" },
            { class: "fa fa-twitter", name: "twitter" },
            { class: "fa fa-twitter-square", name: "twitter-square" },
            { class: "fab fa-typo3", name: "typo3" },
            { class: "fab fa-uber", name: "uber" },
            { class: "fab fa-ubuntu", name: "ubuntu" },
            { class: "fab fa-uikit", name: "uikit" },
            { class: "fab fa-umbraco", name: "umbraco" },
            { class: "fa fa-umbrella", name: "umbrella" },
            { class: "fa fa-umbrella-beach", name: "umbrella-beach" },
            { class: "fab fa-uncharted", name: "uncharted" },
            { class: "fa fa-underline", name: "underline" },
            { class: "fa fa-undo", name: "undo" },
            { class: "fa fa-undo-alt", name: "undo-alt" },
            { class: "fab fa-uniregistry", name: "uniregistry" },
            { class: "fab fa-unity", name: "unity" },
            { class: "fa fa-universal-access", name: "universal-access" },
            { class: "fa fa-university", name: "university" },
            { class: "fa fa-unlink", name: "unlink" },
            { class: "fa fa-unlock", name: "unlock" },
            { class: "fa fa-unlock-alt", name: "unlock-alt" },
            { class: "fab fa-unsplash", name: "unsplash" },
            { class: "fab fa-untappd", name: "untappd" },
            { class: "fa fa-upload", name: "upload" },
            { class: "fab fa-ups", name: "ups" },
            { class: "fa fa-usb", name: "usb" },
            { class: "fa fa-user", name: "user" },
            { class: "fa fa-user-alt", name: "user-alt" },
            { class: "fa fa-user-alt-slash", name: "user-alt-slash" },
            { class: "fa fa-user-astronaut", name: "user-astronaut" },
            { class: "fa fa-user-check", name: "user-check" },
            { class: "fa fa-user-circle", name: "user-circle" },
            { class: "fa fa-user-clock", name: "user-clock" },
            { class: "fa fa-user-cog", name: "user-cog" },
            { class: "fa fa-user-edit", name: "user-edit" },
            { class: "fa fa-user-friends", name: "user-friends" },
            { class: "fa fa-user-graduate", name: "user-graduate" },
            { class: "fa fa-user-injured", name: "user-injured" },
            { class: "fa fa-user-lock", name: "user-lock" },
            { class: "fa fa-user-md", name: "user-md" },
            { class: "fa fa-user-minus", name: "user-minus" },
            { class: "fa fa-user-ninja", name: "user-ninja" },
            { class: "fa fa-user-nurse", name: "user-nurse" },
            { class: "fa fa-user-plus", name: "user-plus" },
            { class: "fa fa-user-secret", name: "user-secret" },
            { class: "fa fa-user-shield", name: "user-shield" },
            { class: "fa fa-user-slash", name: "user-slash" },
            { class: "fa fa-user-tag", name: "user-tag" },
            { class: "fa fa-user-tie", name: "user-tie" },
            { class: "fa fa-user-times", name: "user-times" },
            { class: "fa fa-users", name: "users" },
            { class: "fa fa-users-cog", name: "users-cog" },
            { class: "fa fa-users-slash", name: "users-slash" },
            { class: "fab fa-usps", name: "usps" },
            { class: "fab fa-ussunnah", name: "ussunnah" },
            { class: "fa fa-utensil-spoon", name: "utensil-spoon" },
            { class: "fa fa-utensils", name: "utensils" },
            { class: "fab fa-vaadin", name: "vaadin" },
            { class: "fa fa-vector-square", name: "vector-square" },
            { class: "fa fa-venus", name: "venus" },
            { class: "fa fa-venus-double", name: "venus-double" },
            { class: "fa fa-venus-mars", name: "venus-mars" },
            { class: "fa fa-vest", name: "vest" },
            { class: "fa fa-vest-patches", name: "vest-patches" },
            { class: "fa fa-viacoin", name: "viacoin" },
            { class: "fa fa-viadeo", name: "viadeo" },
            { class: "fa fa-viadeo-square", name: "viadeo-square" },
            { class: "fa fa-vial", name: "vial" },
            { class: "fa fa-vials", name: "vials" },
            { class: "fab fa-viber", name: "viber" },
            { class: "fa fa-video", name: "video" },
            { class: "fa fa-video-slash", name: "video-slash" },
            { class: "fa fa-vihara", name: "vihara" },
            { class: "fa fa-vimeo", name: "vimeo" },
            { class: "fa fa-vimeo-square", name: "vimeo-square" },
            { class: "fab fa-vimeo-v", name: "vimeo-v" },
            { class: "fa fa-vine", name: "vine" },
            { class: "fa fa-virus", name: "virus" },
            { class: "fa fa-virus-slash", name: "virus-slash" },
            { class: "fa fa-viruses", name: "viruses" },
            { class: "fa fa-vk", name: "vk" },
            { class: "fab fa-vnv", name: "vnv" },
            { class: "fa fa-voicemail", name: "voicemail" },
            { class: "fa fa-volleyball-ball", name: "volleyball-ball" },
            { class: "fa fa-volume-down", name: "volume-down" },
            { class: "fa fa-volume-mute", name: "volume-mute" },
            { class: "fa fa-volume-off", name: "volume-off" },
            { class: "fa fa-volume-up", name: "volume-up" },
            { class: "fa fa-vote-yea", name: "vote-yea" },
            { class: "fa fa-vr-cardboard", name: "vr-cardboard" },
            { class: "fab fa-vuejs", name: "vuejs" },
            { class: "fa fa-walking", name: "walking" },
            { class: "fa fa-wallet", name: "wallet" },
            { class: "fa fa-warehouse", name: "warehouse" },
            { class: "fab fa-watchman-monitoring", name: "watchman-monitoring" },
            { class: "fa fa-water", name: "water" },
            { class: "fa fa-wave-square", name: "wave-square" },
            { class: "fab fa-waze", name: "waze" },
            { class: "fab fa-weebly", name: "weebly" },
            { class: "fa fa-weibo", name: "weibo" },
            { class: "fa fa-weight", name: "weight" },
            { class: "fa fa-weight-hanging", name: "weight-hanging" },
            { class: "fa fa-weixin", name: "weixin" },
            { class: "fa fa-whatsapp", name: "whatsapp" },
            { class: "fab fa-whatsapp-square", name: "whatsapp-square" },
            { class: "fa fa-wheelchair", name: "wheelchair" },
            { class: "fab fa-whmcs", name: "whmcs" },
            { class: "fa fa-wifi", name: "wifi" },
            { class: "fa fa-wikipedia-w", name: "wikipedia-w" },
            { class: "fa fa-wind", name: "wind" },
            { class: "fa fa-window-close", name: "window-close" },
            { class: "fa fa-window-maximize", name: "window-maximize" },
            { class: "fa fa-window-minimize", name: "window-minimize" },
            { class: "fa fa-window-restore", name: "window-restore" },
            { class: "fa fa-windows", name: "windows" },
            { class: "fa fa-wine-bottle", name: "wine-bottle" },
            { class: "fa fa-wine-glass", name: "wine-glass" },
            { class: "fa fa-wine-glass-alt", name: "wine-glass-alt" },
            { class: "fab fa-wix", name: "wix" },
            { class: "fab fa-wizards-of-the-coast", name: "wizards-of-the-coast" },
            { class: "fab fa-wodu", name: "wodu" },
            { class: "fab fa-wolf-pack-battalion", name: "wolf-pack-battalion" },
            { class: "fa fa-won-sign", name: "won-sign" },
            { class: "fa fa-wordpress", name: "wordpress" },
            { class: "fab fa-wordpress-simple", name: "wordpress-simple" },
            { class: "fa fa-wpbeginner", name: "wpbeginner" },
            { class: "fa fa-wpexplorer", name: "wpexplorer" },
            { class: "fa fa-wpforms", name: "wpforms" },
            { class: "fab fa-wpressr", name: "wpressr" },
            { class: "fa fa-wrench", name: "wrench" },
            { class: "fa fa-x-ray", name: "x-ray" },
            { class: "fab fa-xbox", name: "xbox" },
            { class: "fa fa-xing", name: "xing" },
            { class: "fa fa-xing-square", name: "xing-square" },
            { class: "fa fa-y-combinator", name: "y-combinator" },
            { class: "fa fa-yahoo", name: "yahoo" },
            { class: "fab fa-yammer", name: "yammer" },
            { class: "fab fa-yandex", name: "yandex" },
            { class: "fab fa-yandex-international", name: "yandex-international" },
            { class: "fab fa-yarn", name: "yarn" },
            { class: "fa fa-yelp", name: "yelp" },
            { class: "fa fa-yen-sign", name: "yen-sign" },
            { class: "fa fa-yin-yang", name: "yin-yang" },
            { class: "fa fa-yoast", name: "yoast" },
            { class: "fa fa-youtube", name: "youtube" },
            { class: "fa fa-youtube-square", name: "youtube-square" },
            { class: "fab fa-zhihu", name: "zhihu" },
        ];
    function Ba(a, e) {
        return (
            (function (a) {
                if (Array.isArray(a)) return a;
            })(a) ||
            (function (a, e) {
                var s = null == a ? null : ("undefined" != typeof Symbol && a[Symbol.iterator]) || a["@@iterator"];
                if (null == s) return;
                var i,
                    n,
                    t = [],
                    r = !0,
                    l = !1;
                try {
                    for (s = s.call(a); !(r = (i = s.next()).done) && (t.push(i.value), !e || t.length !== e); r = !0);
                } catch (a) {
                    (l = !0), (n = a);
                } finally {
                    try {
                        r || null == s.return || s.return();
                    } finally {
                        if (l) throw n;
                    }
                }
                return t;
            })(a, e) ||
            (function (a, e) {
                if (!a) return;
                if ("string" == typeof a) return Na(a, e);
                var s = Object.prototype.toString.call(a).slice(8, -1);
                "Object" === s && a.constructor && (s = a.constructor.name);
                if ("Map" === s || "Set" === s) return Array.from(a);
                if ("Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return Na(a, e);
            })(a, e) ||
            (function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
        );
    }
    function Na(a, e) {
        (null == e || e > a.length) && (e = a.length);
        for (var s = 0, i = new Array(e); s < e; s++) i[s] = a[s];
        return i;
    }
    function Aa(a, e) {
        var s = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(a);
            e &&
                (i = i.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                })),
                s.push.apply(s, i);
        }
        return s;
    }
    function qa(a) {
        for (var e = 1; e < arguments.length; e++) {
            var s = null != arguments[e] ? arguments[e] : {};
            e % 2
                ? Aa(Object(s), !0).forEach(function (e) {
                      Ta(a, e, s[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s))
                : Aa(Object(s)).forEach(function (e) {
                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e));
                  });
        }
        return a;
    }
    function Ta(a, e, s) {
        return e in a ? Object.defineProperty(a, e, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : (a[e] = s), a;
    }
    var Da = function (a) {
            var i,
                n = a.className,
                r = a.icon,
                c = a.onChange,
                o = a.defaults,
                f = void 0 === o ? {} : o,
                m = { class: "", name: "", fontSize: 16, color: "#fe6601" },
                y = function (a) {
                    return (null == f ? void 0 : f[a]) || m[a];
                },
                g = function (a) {
                    return (null == r ? void 0 : r[a]) || y(a);
                },
                d = function (a, e) {
                    return c(qa(qa({}, r), {}, Ta({}, a, e)));
                },
                u = Ba((0, s.useState)(""), 2),
                p = u[0],
                v = u[1],
                h = Ba((0, s.useState)(!1), 2),
                b = h[0],
                w = h[1],
                k = Ma.filter(function (a) {
                    return a.name.replace(/-/g, " ").toLowerCase().includes(p.toLowerCase());
                });
            return (
               
                wp.element.createElement(
                    wp.element.Fragment,
                    null,
                    wp.element.createElement(
                        t.PanelRow,
                        { className: "gradiantIconTitle ".concat(n) },
                        wp.element.createElement(l, { mt: "0", mb: "0" }, (0, e.__)("Select Icon:", "info-box")),
                        wp.element.createElement("i", { className: null == r ? void 0 : r.class })
                    ),
                    wp.element.createElement(
                        "div",
                        { className: "gradiantIconSelect" },
                        wp.element.createElement("input", {
                            type: "search",
                            value: p,
                            onClick: function () {
                                return w(!b);
                            },
                            placeholder: (null === (i = g("name")) || void 0 === i ? void 0 : i.replace(/-/g, " ")) || "Search Icon",
                            onChange: function (a) {
                                return v(a.target.value);
                            },
                        }),
                        wp.element.createElement("span", {
                            className: "dashicon dashicons dashicons-".concat(b ? "arrow-up" : "arrow-down"),
                            onClick: function () {
                                return w(!b);
                            },
                        }),
                        b &&
                            wp.element.createElement(
                                "div",
                                { className: "gradiantIconLists" },
                                null == k
                                    ? void 0
                                    : k.map(function (a) {
                                          var e;
                                          return wp.element.createElement(
                                              t.Tooltip,
                                              { key: null == a ? void 0 : a.class, text: null == a || null === (e = a.name) || void 0 === e ? void 0 : e.replace(/-/g, " "), position: "top" },
                                              wp.element.createElement("i", {
                                                  onClick: function () {
                                                      var e;
                                                      c(qa(qa({}, r), {}, (Ta((e = {}), "class", null == a ? void 0 : a.class), Ta(e, "name", null == a ? void 0 : a.name), e))), v(""), w(!1);
                                                  },
                                                  className: null == a ? void 0 : a.class,
                                              })
                                          );
                                      })
                            )
                    ),
                   
                )
            );
        },
        Ra = function (a) {
            var E = ma((0, s.useState)("desktop"), 2),
                P = E[0],
				i = a.className,
                c = a.attributes,
                f = c.isIcon,
                m = c.icon,
                y = c.isTitle,
                g = c.title,
                u = c.isDesc,
                p = c.desc,
				h = c.isLink,
                b = c.link,
                C = a.setAttributes,
				v = f.columns,
				k = c.isInfoType,
                w = c.infoType,
                x = a.clientId;
            return (
                (0, s.useEffect)(
                    function () {
                        x && C({ cId: x });
                    },
                    [x]
                ),
                wp.element.createElement(
                    wp.element.Fragment,
                    null,
                    wp.element.createElement(
                        n.InspectorControls,
                        null,
                        f &&
                            wp.element.createElement(
                                t.PanelBody,
                                { title: (0, e.__)("Icon Settings", "info-box"), initialOpen: !1 },
                                wp.element.createElement(Da, {
                                    icon: m,
                                    onChange: function (a) {
                                        return C({ icon: a });
                                    },
                                    defaults: { class: "fa fa-wordpress", fontSize: 70 },
                                })
                            ),
							h &&
                            wp.element.createElement(
                                t.PanelBody,
                                { title: (0, e.__)("Link Settings", "clever-fox"), initialOpen: !1 },
                                wp.element.createElement(l, { mt: "0" }, (0, e.__)("Link:", "clever-fox")),
                                wp.element.createElement(t.TextControl, {
                                    value: b,
                                    onChange: function (a) {
                                        return C({ link: a });
                                    },
                                }),
                            ),
							
							
							wp.element.createElement(
                                t.PanelBody,
                                { title: (0, e.__)("Layout Settings", "clever-fox"), initialOpen: !1 },
                                wp.element.createElement(l, { mt: "0" }, (0, e.__)("Columns:", "clever-fox")),
                                wp.element.createElement(t.RangeControl, {
									//value: v[P],
									onChange: function (a) {
										C({ columns: oa(oa({}, v), {}, fa({}, P, a)) });
									},
									min: 1,
									max: 6,
									step: 1,
									beforeIcon: "grid-view",
								}),
                            ),
							k &&
								wp.element.createElement(
									t.PanelBody,
									{ title: (0, e.__)("Info Type", "clever-fox"), initialOpen: !1 },
									wp.element.createElement(l, { mt: "0" }, (0, e.__)("Info Type:", "clever-fox")),
									wp.element.createElement(t.TextControl, {
										value: w,
										onChange: function (a) {
											return C({ infoType: a });
										},
									}),
								),
                    ),
                    wp.element.createElement(
                        "div",
                        { className: i, id: "gradiantInfo-".concat(x) },
                        wp.element.createElement("style", {
                            dangerouslySetInnerHTML: {
                                __html: "\n                #gradiantInfo-"
                                    .concat(x, " .gradiantInfo .bgLayer{\n                    ")
                                    .concat(x, " .gradiantInfo .title{\n                    color: ")
                                    .concat(x, " .gradiantInfo .icon{\n                    ")
                                    .concat((null == m ? void 0 : m.styles) || "font-size: 70px;", "\n                }\n                #gradiantInfo-")
                                    .concat(x, " .gradiantInfo .description{\n                    color: ")
                                    .concat(x, " .gradiantInfo .link a svg{\n                    fill: "),
                            },
                        }),
                        wp.element.createElement(
                            "div",
							{ className: "gradiantInfo av-column-".concat(m.desktop, " columns-tablet-").concat(m.tablet, " av-sm-column-").concat(m.mobile)},
                            wp.element.createElement("div", { className: "bgLayer" }),
                            f && (null == m ? void 0 : m.class) && wp.element.createElement("div", { className: "icon" }, wp.element.createElement("i", { className: null == m ? void 0 : m.class })),
                            y &&
                                wp.element.createElement(n.RichText, {
                                    className: "title",
                                    tagName: "span",
                                    value: g,
                                    onChange: function (a) {
                                        return C({ title: a });
                                    },
                                    placeholder: (0, e.__)("Info Title", "info-box"),
                                }),
                            u &&
                                wp.element.createElement(n.RichText, {
                                    className: "description",
                                    tagName: "p",
                                    value: p,
                                    onChange: function (a) {
                                        return C({ desc: a });
                                    },
                                    placeholder: (0, e.__)("Info Description", "info-box"),
                                }),
							//h && wp.element.createElement("a", { className: "contact-info" }, wp.element.createElement("a", { href: b }, r.longArrowToRight))	
                        )
                    )
                )
            );
        };
    (0, a.registerBlockType)("info-box/info", {
        title: (0, e.__)("Info", "info-box"),
        description: (0, e.__)("Info item for infos section", "info-box"),
        parent: ["info-box/infos"],
        icon: r.infos,
        category: "gradiant",
        keywords: [(0, e.__)("info", "info-box"), (0, e.__)("info item", "info-box"), (0, e.__)("info card", "info-box")],
        supports: { reusable: !1, html: !1 },
        attributes: {
            cId: { type: "string" },
            isIcon: { type: "boolean", default: !0 },
            icon: { type: "object", default: { class: "fa fa-wordpress", fontSize: 70 } },
            isTitle: { type: "boolean", default: !0 },
            title: { type: "string", selector: ".gradiantInfo span.title", default: "Info title" },
            isDesc: { type: "boolean", default: !0 },
            desc: { type: "string", selector: ".gradiantInfo h3.description", default: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, fuga." },
			 isLink: { type: "boolean", default: !0 },
            link: { type: "string", default: "#" },
			columns: { type: "object", default: { desktop: 2, tablet: 2, mobile: 1 } },
			isInfoType: { type: "boolean", default: !0 },
            infoType: { type: "string", default: "Style 1" },
        },
        edit: Ra,
        save: function () {
            return null;
        },
        example: { attributes: { preview: !0, columns: { desktop: 1, tablet: 1, mobile: 1 } } },
    });
    
})();
