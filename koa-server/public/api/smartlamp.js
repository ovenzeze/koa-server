// 指令下发

COMMEND_TYPE = {
    CHANGE_STATE: 1, //改变灯的状态，开或者关 1: 开 0: 关
    CHANGE_BRIGHTNESS: 2, //改变灯的亮度 一个数值 单位流明(LUX)
    CHANGE_THRESHOLD_VALUE: 3, //改变自动亮度调节的阈值 一个数值 单位流明(LUX)
    CHANGE_START_TIME: 4, //改变自动开灯的时间 一个字符串 格式: HH:MM(小时:分钟)
    CHANGE_CLOSE_TIME: 5 //改变自动关灯的时间  一个字符串 格式: HH:MM(小时:分钟)
}
commandInfo = {
    commandType: Required|Int|COMMAND_TYPE, //指令类型
    action: Required|String, //根据指令类型不同 填不同的值
}
data = {
    deviceId: Required|String, //设备ID
    command: Required|Array|commandInfo, //指令数组（可以一次下发多个指令）
}

// 举个例子:
// 我希望设备ID为Z001的路灯点亮
data = {
    deviceId: 'Z001',
    command: [
        {
            commandType: 1,
            action: '1'
        }
    ]
}
// 我希望设备ID为Z001的路灯点亮，并且每天的下午8:00开启，晚上12:00关闭
data = {
    deviceId: 'Z001',
    command: [
        {
            commandType: 1,
            action: '1'
        },
        {
            commandType: 4,
            action: '20:00'
        },
        {
            commandType: 5,
            action: '24:00'
        }
    ]
}
