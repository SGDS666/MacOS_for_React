export const checkCode = (setlines:(d:any)=>void,setValue:(d:any)=>void,code:string) => {
    switch (code) {
        case "clear":
            setlines([])
            
            break;
        case "date":
            
            setlines((l:any)=>[...l,`title ${code}`,new Date().toLocaleString()])
            break
        case "--help":
            setlines((l:any)=>[...l,
                `title ${code}`,
                "clear -- 输入clear清空控制台",
                "date -- 输入date获取当前时间",
                "ls -- 查看当前目录",
                "sudo -- 超级管理员模式",
                "log -- 查看最新的更新日志"
            ])
            break
        case "ls":
            setlines((l:any)=>[...l,
                `title ${code}`,
                "Applications(锁定中... 无法进入)",
                "Desktop(锁定中...  无法进入)",
                "Documents(锁定中...  无法进入)",
                "Downloads(锁定中...  无法进入)",
                "Movies(锁定中...  无法进入)",
                "Music(锁定中...  无法进入)",
                "Public(锁定中...  无法进入)",
                "opt(锁定中...  无法进入)",
                "Library(锁定中...  无法进入)"
                
            ])
            break
        case "sudo":
            setlines((l:any)=>[...l,
                `title ${code}`,
                '非常抱歉 当前权限无法启用此模式'
                
            ])
            break
        case "log":
            setlines((l:any)=>[
                ...l,
                `title ${code}`,
                "新增窗口尺寸任意调节(仅限可全屏的窗口) 2023/2/2 已更新",
                "新增最小化动画 2023/2/3 已更新",
                "appstore内应用状态分离 不再被apptore影响 2023/2/4 已更新",
                "最小化动画修改成类似前台调度样式",
                "下一步计划 ",
                "补全内容"
            ])
            break
        default:
            setlines((l:any)=>[...l, `title ${code}`,`zsh: command not found:${code}`,"也许你可以输入--help 获取提示"])
        
            
    }
    setValue("")
}