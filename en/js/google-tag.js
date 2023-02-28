window.dataLayer = window.dataLayer || [];

function gtag(){dataLayer.push(arguments);}

gtag('consent', 'default', {
  'ad_storage': 'denied',
  'analytics_storage': 'denied'
});

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KP8DF7W');

function setupPrivacyConsent () {
  const KEY = "consented"

  function getConsented () {
    try {
      const consentedJsonString = localStorage.getItem(KEY)
      if (!consentedJsonString) return null
      const consented = JSON.parse(consentedJsonString)
      if (typeof consented !== "boolean") throw Error("invalid value")
      return consented
    } catch (error){
      return false
    }
  }

  function consent () {
    gtag('consent', 'update', {
      'ad_storage': 'granted',
      'analytics_storage': 'granted'
    });
    localStorage.setItem(KEY, JSON.stringify(true))
  }

  function disconsent () {
    gtag('consent', 'update', {
      'ad_storage': 'denied',
      'analytics_storage': 'denied'
    });
    localStorage.setItem(KEY, JSON.stringify(false))
  }

  window.addEventListener("load", function () {
    const consented = getConsented()
    console.info({ consented })
    if (consented === false) {
      console.info("consented: false")
      return
    }

    if (consented === true) {
      consent()
      console.info("consented: true")
      return
    }

    console.info("consented: null")

    const document = window.document

    const container = document.createElement("div")
    container.classList.add("privacyConsent")

    const message = document.createElement("div")
    message.innerHTML = "アクセス解析のためCoookieを使っていいですか？"
    message.classList.add("privacyConsent__message")
    container.appendChild(message)

    const buttons = document.createElement("div")
    buttons.classList.add("privacyConsent__buttons")
    container.appendChild(buttons)

    const agreeButton = document.createElement("button")
    agreeButton.innerText = "同意する"
    agreeButton.setAttribute("type", "button")
    agreeButton.classList.add(
      "privacyConsent__button",
      "privacyConsent__button--agree"
    )
    agreeButton.addEventListener("click", function () {
      consent()
      container.remove()
    },{ once: true })
    buttons.appendChild(agreeButton)

    const disagreeButton = document.createElement("button")
    disagreeButton.innerText = "同意しない"
    disagreeButton.setAttribute("type", "button")
    disagreeButton.addEventListener("click", function () {
      disconsent()
      container.remove()
    },{ once: true })
    disagreeButton.classList.add(
      "privacyConsent__button",
      "privacyConsent__button--disagree"
    )

    buttons.appendChild(disagreeButton)

    document.body.appendChild(container)
  })
}

setupPrivacyConsent()
