export default class BrowserReporter {
  constructor (options) {
    this.options = Object.assign({}, options)

    this.defaultColor = '#7f8c8d' // Gray
    this.levelColorMap = {
      0: '#c0392b', // Red
      1: '#f39c12', // Yellow
      3: '#00BCD4' // Cyan
    }
    this.typeColorMap = {
      success: '#2ecc71' // Green
    }
    this.tagColorMap = {}
    this.updateTagColorMap = (tagColorMap) => {
      this.tagColorMap = Object.assign({}, this.tagColorMap, tagColorMap)
    }
  }

  log (logObj) {
    const consoleLogFn = logObj.level < 1
      // eslint-disable-next-line no-console
      ? (console.__error || console.error)
      // eslint-disable-next-line no-console
      : logObj.level === 1 && console.warn ? (console.__warn || console.warn) : (console.__log || console.log)

    // Type
    const type = logObj.type !== 'log' ? logObj.type : ''

    // Styles
    const color = this.typeColorMap[logObj.type] || this.levelColorMap[logObj.level] || this.defaultColor
    const style = `
      background: ${color};
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
      margin-right: 0.5em;
    `

    const badge = `%c${type}`

    let tags = ''
    const tagsStyles = []

    if (logObj.tags) {
      for (const tag of logObj.tags) {
        const color = this.tagColorMap[tag] || this.defaultColor
        const style = `
        background: ${color};
        border-radius: 0.5em;
        color: white;
        font-weight: bold;
        padding: 2px 0.5em;
        margin-right: 0.5em;
      `
        tagsStyles.push(style)
        tags += `%c${tag}`
      }
    }

    // Log to the console
    if (typeof logObj.args[0] === 'string') {
      consoleLogFn(
        `${badge}${tags}%c ${logObj.args[0]}`,
        style,
        ...tagsStyles,
        // Empty string as style resets to default console style
        '',
        ...logObj.args.slice(1)
      )
    } else {
      consoleLogFn(badge, style, ...logObj.args)
    }
  }
}
