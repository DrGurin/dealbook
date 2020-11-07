import Vue from "vue"; 
import VueI18n from "vue-i18n"; 

Vue.use(VueI18n); 

export const i18n = new VueI18n({
    locale: "EN", 
    fallbackLocale : "РУ",
    messages: {
        EN: {
            home: "Home", 
            homeSolution: "Trader's personal diary",
            roadmap: "Roadmap", 
            creation: "Creation of the idea", 
            gatheringTeam: "Gathering of the volunteer team of developers", 
            estimatedProject: "Estimated launch of Product MVP", 
            integrationOfExchanhe: "Integration of exchnage API", 
            commingSoon: "Coming soon",
            updatingSectionOfRoadMap: "Updating the platform with constant adding new features",
            quater3: "Q3 2020", 
            quater4: "Q4 2020", 
            quater14: "Q1-Q4 2021", 
            quater214: "Q1-Q4 2022", 
            warningRoadmap: "Updating the platform with constant adding new features",
            footerText:'Donations are completely free-will and are non-obligatory, but they will help us to develop further and  faster. <u>The team consists of volunteers and fans of the idea.</u>',
        }, 
        РУ: {
            home: "Главная",
            homeSolution: "Дневник трейдера",
        }
    }
})
