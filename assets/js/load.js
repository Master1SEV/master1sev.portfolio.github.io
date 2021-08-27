var 引流 = [

]

const initConfig = {
  mode: "fixed",
  hidden: true,
  content: {
    link: 引流[Math.floor(Math.random() * 引流.length)],
    welcome: ["Hi!"],
    touch: "",
    skin: ["Ты хочешь увидеть других участников?", "10"],
    custom: [
      { "selector": ".comment-form", "text": "Content Tooltip" },
      { "selector": ".home-social a:last-child", "text": "Blog Tooltip" },
      { "selector": ".list .postname", "type": "read" },
      { "selector": ".post-content a, .page-content a, .post a", "type": "link" }
    ],
  },
  night: "toggleNightMode()",
  model: [
    "https://cdn.jsdelivr.net/gh/journey-ad/blog-img/live2d/Diana"
    "assets/json/Diana.model3.json",
  ],
  tips: true,
  onModelLoad: onModelLoad
}

function 加载圣·嘉然() {
  pio_reference = new Paul_Pio(initConfig)

  pio_alignment = "right"

  // Then apply style
  pio_refresh_style()
}

function onModelLoad(model) {
  const container = document.getElementById("pio-container")
  const canvas = document.getElementById("pio")
  const modelNmae = model.internalModel.settings.name
  const coreModel = model.internalModel.coreModel
  const motionManager = model.internalModel.motionManager

  let touchList = [
    {
      text: "text1",
      motion: "Idle"
    },
    {
      text: "text2",
      motion: "Idle"
    }
  ]

  function playAction(action) {
    action.text && pio_reference.modules.render(action.text)
    action.motion && pio_reference.model.motion(action.motion)

    if (action.from && action.to) {
      Object.keys(action.from).forEach(id => {
        const hidePartIndex = coreModel._partIds.indexOf(id)
        TweenLite.to(coreModel._partOpacities, 0.6, { [hidePartIndex]: action.from[id] });
        // coreModel._partOpacities[hidePartIndex] = action.from[id]
      })

      motionManager.once("motionFinish", (data) => {
        Object.keys(action.to).forEach(id => {
          const hidePartIndex = coreModel._partIds.indexOf(id)
          TweenLite.to(coreModel._partOpacities, 0.6, { [hidePartIndex]: action.to[id] });
          // coreModel._partOpacities[hidePartIndex] = action.to[id]
        })
      })
    }
  }

  canvas.onclick = function () {
    if (motionManager.state.currentGroup !== "Idle") return

    const action = pio_reference.modules.rand(touchList)
    playAction(action)
  }

  if (modelNmae === "Diana") {
    container.dataset.model = "Diana"
    initConfig.content.skin[1] = ["Я гурман ~ Джиаран Диана~"]
    playAction({ motion: "6" })

    

  } else if (modelNmae === "Ava") {
    container.dataset.model = "Ava"
    initConfig.content.skin[1] = ["vA~"]
    playAction({
      motion: "Tap左眼",
      from: {
        "Part15": 1
      },
      to: {
        "Part15": 0
      }
    })

    canvas.width = model.width * 1.2
    const hideParts = [
      "Part5", // 1
      "neko", // 2
      "game", // 3
      "Part15", // 4
      "Part21", // 5
      "Part22", // 6
      "Part", // 7
      "Part16", // 8
      "Part12" // 9
    ]
    const hidePartsIndex = hideParts.map(id => coreModel._partIds.indexOf(id))
    hidePartsIndex.forEach(idx => {
      coreModel._partOpacities[idx] = 0
    })
  }
}

var pio_reference
window.onload = 加载圣·嘉然
