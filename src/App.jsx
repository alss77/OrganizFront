import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import Helmet from 'react-helmet';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import { changeLang } from './actions/index';
import Header from './components/header';
import fr from './lang/fr';
import en from './lang/en';

counterpart.registerTranslations('fr', fr);
counterpart.registerTranslations('en', en);


function App(props) {
  const { lang } = props;
  counterpart.setLocale(lang);

  // const [lang, setLang] = useState('fr');

  const onChangeLang = (e) => {
    props.changeLang(e.target.value);
    counterpart.setLocale(lang);
    console.log(`La langue est : ${lang}`);
  };

  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: #F7F5FF; }'}</style>
      </Helmet>
      <Header />
      <select value={lang} onChange={onChangeLang}>
        <option value="fr">FR</option>
        <option value="en">EN</option>
      </select>
      <Translate content="bienvenue" component="h1" />
    </div>
  );
}

App.propTypes = {
  changeLang: PropTypes.func.isRequired,
  lang: PropTypes.string,
};

App.defaultProps = {
  lang: '',
};
const mapStateToProps = (store) => ({
  lang: store.langReducer.lang,
});

export default connect(mapStateToProps, { changeLang })(App);
