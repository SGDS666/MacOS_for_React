const formatSec:Function = (sec = 6000) => {
    if (sec <= 60) {
    return `${sec<10?"0"+sec:sec}`
    }

    if (sec <= 3600) {
        let M = Math.floor(sec / 60)
        const other = formatSec(sec - M * 60)
        const Time = `${M < 10 ? '0' + M : M}:${other}`
        return Time
    }

    if (sec <= 86400) {
        let H = Math.floor(sec / 3600)
        const other = formatSec(sec - H * 3600)
        const Time = `${H < 10 ? '0' + H : H}:${other}`
        return Time
    }
    
    return '猴年马月'
}

const formatDate = (sjc:number) => {
    const basetime = 1659283200000
    const newdate = new Date(sjc+basetime)
    // const str = newdate.toLocaleString()
    const year = newdate.getFullYear()
    const mouth = newdate.getMonth()+1
    const day = newdate.getDate()

    return `${year}年${mouth}月${day}日`
}

export {formatSec ,formatDate}