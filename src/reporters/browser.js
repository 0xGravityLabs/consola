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
    this.tagColorMap = this.options.tagColorMap || {}
    this.allowedTagMap = this.options.allowedTagMap || {}
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
        if (this.allowedTagMap[tag] !== undefined && this.allowedTagMap[tag] === false) {
          return
        }
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

    let project = ''
    let projectStyle = ''
    if (logObj.project) {
      project = `%c${logObj.project}`
      const color = this.tagColorMap[logObj.project] || this.defaultColor
      projectStyle = `
        background: ${color};
        border-radius: 0.5em;
        color: white;
        font-weight: bold;
        padding: 2px 0.5em;
        margin-right: 0.5em;
      `
    }

    // Log to the console
    if (typeof logObj.args[0] === 'string') {
      consoleLogFn(
        `${project}${badge}${tags}%c ${logObj.args[0]}`,
        projectStyle,
        style,
        ...tagsStyles,
        // Empty string as style resets to default console style
        '',
        ...logObj.args.slice(1)
      )
    } else {
      consoleLogFn(`${project}${badge}${tags}`, projectStyle, style, ...tagsStyles, ...logObj.args)
    }
  }
}
