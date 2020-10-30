import Vue from "vue"; 
import VueI18n from "vue-i18n"; 

Vue.use(VueI18n); 

export const i18n = new VueI18n({
    locale: "EN", 
    fallbackLocale : "РУ",
    messages: {
        EN: {
            home: "Home", 
            home_solution: "Trader's personal diary",
        }, 
        РУ: {
            home: "Главная",
            home_solution: "Дневник трейдера",
        }
    }
})
