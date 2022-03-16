import React from "react";
import { useTranslation } from "react-i18next";
import "./Description.css"

const Description = () => {
    const { t } = useTranslation();
    return (
        <div className="Description">
            <h1 className = "CYH">{t("choose_your_hero")}</h1>
            <p className = "HeroeText">
                {t("hero_text")}
            </p>
        </div>
    )
}

export default Description