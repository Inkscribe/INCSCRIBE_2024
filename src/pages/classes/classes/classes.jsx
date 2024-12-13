import React from 'react'
import './classes.css'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useTransition } from "../../../common/TransitionContext";
const classes = () => {
  const { isFading } = useTransition();
  const { t } = useTranslation("global");
  return (
    <>
    <section className="hero_section">
    <div className={`fade ${isFading ? "hidden" : ""}`}>
        <div className="hero_box">
          <p className="hero_box_paragraph" data-aos="fade-zoomIn">
            {t('classes.breadcrumb_home')} / {t('classes.breadcrumb_page')} / <span>{t('classes.breadcrumb_classes')}</span>
          </p>
          <h1 className="hero_header-1" data-aos="fade-zoomIn">
            {t('classes.header')}
          </h1>
          <p className="classes_paragraph" data-aos="fade-zoomIn">
            {t('classes.paragraph')}
          </p>
          <div className="banner_box"></div>
        </div>
        <div className="hero_box_button">
        <div className="hero_box_container_buuton">
           <button className='button-1'data-aos="fade-right"><a href="#classes">{t('classes.get_started')}</a></button>
           <button className='button-2'data-aos="fade-left"><NavLink to='/booking'>{t('classes.book_now')}</NavLink></button>
           </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default classes