/* ----

# Pio Plugin
# By: Dreamer-Paul


Live2D JS

GPL 2.0 ：https://paugram.com

---- */

var Paul_Pio = function (prop) {
    var that = this;

    var current = {
        idol: 0,
        menu: document.querySelector(".pio-container .pio-action"),
        canvas: document.getElementById("pio"),
        body: document.querySelector(".pio-container"),
        root: document.location.protocol +'//' + document.location.hostname +'/'
    };

    var modules = {
        
        idol: function () {
            current.idol < (prop.model.length - 1) ? current.idol++ : current.idol = 0;
            return current.idol;
        },
        
        create: function (tag, prop) {
            var e = document.createElement(tag);
            if(prop.class) e.className = prop.class;
            return e;
        },
       
        rand: function (arr) {
            return arr[Math.floor(Math.random() * arr.length + 1) - 1];
        },
        
        render: function (text) {
            if(text.constructor === Array){
                dialog.innerText = modules.rand(text);
            }
            else if(text.constructor === String){
                dialog.innerText = text;
            }
            else{
                dialog.innerText = "Существует проблема с вводом X_X";
            }

            dialog.classList.add("active");

            clearTimeout(this.t);
            this.t = setTimeout(function () {
                dialog.classList.remove("active");
            }, 3000);
        },
        
        destroy: function () {
            that.initHidden();
            localStorage.setItem("posterGirl", 0);
        },
        
        isMobile: function () {
            var ua = window.navigator.userAgent.toLowerCase();
            ua = ua.indexOf("mobile") || ua.indexOf("android") || ua.indexOf("ios");

            return window.innerWidth < 500 || ua !== -1;
        }
    };
    this.destroy = modules.destroy;

    var elements = {
        home: modules.create("span", {class: "pio-home"}),
        skin: modules.create("span", {class: "pio-skin"}),
        info: modules.create("span", {class: "pio-info"}),
        night: modules.create("span", {class: "pio-night"}),
        close: modules.create("span", {class: "pio-close"}),

        show: modules.create("div", {class: "pio-show"})
    };

    var dialog = modules.create("div", {class: "pio-dialog"});
    current.body.appendChild(dialog);
    current.body.appendChild(elements.show);

    
    var action = {
        
        welcome: function () {
            if(document.referrer !== "" && document.referrer.indexOf(current.root) === -1){
                var referrer = document.createElement('a');
                referrer.href = document.referrer;
                prop.content.referer ? modules.render(prop.content.referer.replace(/%t/, "“" + referrer.hostname + "”")) : modules.render("11 “" + referrer.hostname + "” 22");
            }
            else if(prop.tips){
                var text, hour = new Date().getHours();

                if (hour > 22 || hour <= 5) {
                    text = 'Ты ночная сова? Я не сплю так поздно, я встану завтра';
                }
                else if (hour > 5 && hour <= 8) {
                    text = 'Доброе утро';
                }
                else if (hour > 8 && hour <= 11) {
                    text = 'Доброе утро! Работайте хорошо, не ведите сидячий образ жизни, вставайте и больше гуляйте!';
                }
                else if (hour > 11 && hour <= 14) {
                    text = 'Уже полдень, я работала все утро, а сейчас время обеда!';
                }
                else if (hour > 14 && hour <= 17) {
                    text = 'Днем легко заснуть, достигнута ли сегодняшняя спортивная цель?';
                }
                else if (hour > 17 && hour <= 19) {
                    text = 'Уже вечер! Вид на закат за окном очень красивый, но самый красивый закат-красный';
                }
                else if (hour > 19 && hour <= 21) {
                    text = 'Добрый вечер, как вы сегодня?';
                }
                else if (hour > 21 && hour <= 23) {
                    text = 'Уже так поздно, отдохни пораньше, спокойной ночи~';
                }
                else{
                    text = "ываавваы";
                }

                modules.render(text);
            }
            else{
                modules.render(prop.content.welcome || "Добро пожаловать на этот сайт!");
            }
        },

        touch: function () {
            current.canvas.onclick = function () {
                modules.render(prop.content.touch || ["1", "2", "3", "4"]);
            };
        },


    };

    var begin = {
        static: function () {
            current.body.classList.add("static");
        },
        fixed: function () {
            action.touch(); action.buttons();
        },
        draggable: function () {
            action.touch(); action.buttons();

            var body = current.body;
            body.onmousedown = function (downEvent) {
                var location = {
                    x: downEvent.clientX - this.offsetLeft,
                    y: downEvent.clientY - this.offsetTop
                };

                function move(moveEvent) {
                    body.classList.add("active");
                    body.classList.remove("right");
                    body.style.left = (moveEvent.clientX - location.x) + 'px';
                    body.style.top  = (moveEvent.clientY - location.y) + 'px';
                    body.style.bottom = "auto";
                }

                document.addEventListener("mousemove", move);
                document.addEventListener("mouseup", function () {
                    body.classList.remove("active");
                    document.removeEventListener("mousemove", move);
                });
            };
        }
    };

    this.init = function (onlyText) {
        if(!(prop.hidden && modules.isMobile())){
            if(!onlyText){
                action.welcome();
                loadlive2d("pio", prop.model[0]);
            }

            switch (prop.mode){
                case "static": begin.static(); break;
                case "fixed":  begin.fixed(); break;
                case "draggable": begin.draggable(); break;
            }

            if(prop.content.custom) action.custom();
        }
    };



    localStorage.getItem("posterGirl") == 0 ? this.initHidden() : this.init();
};


if (window.console && window.console.log) {
}
