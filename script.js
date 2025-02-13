// script.js

let character = {
    nickname: "Jordan",
    battlePower: 1842,
    level: 1,
    exp: 0,
    maxExp: 31668, // 升级所需经验
    job: "无",
    gold: 99999,
    atk: 10,      // 物攻
    def: 5,      // 物防
    hp: 100,     // 生命
    magicAtk: 8,  // 魔攻
    magicDef: 4,  // 魔抗
    mp: 50,      // 魔法
    hit: 80,     // 命中
    dodge: 10,    // 闪避
    block: 5,     // 格挡
    crit: 15,    // 暴击
    critDmg: 150, // 爆伤 (百分比)
    antiCrit: 5, // 抗暴
    speed: 10,   // 速度
    luck: 20     // 幸运
};

let currentMap = "新手村";

// 更新人物信息
document.getElementById("battle-power").textContent = character.battlePower;
document.getElementById("level").textContent = character.level;
document.getElementById("exp").textContent = character.exp + " / " + character.maxExp;
document.getElementById("job").textContent = character.job;
document.getElementById("gold").textContent = character.gold;

// 更新主要属性
document.getElementById("atk").textContent = character.atk;
document.getElementById("def").textContent = character.def;
document.getElementById("hp").textContent = character.hp;
document.getElementById("magic-atk").textContent = character.magicAtk;
document.getElementById("magic-def").textContent = character.magicDef;
document.getElementById("mp").textContent = character.mp;
document.getElementById("hit").textContent = character.hit;
document.getElementById("dodge").textContent = character.dodge;
document.getElementById("block").textContent = character.block;
document.getElementById("crit").textContent = character.crit;
document.getElementById("crit-dmg").textContent = character.critDmg + "%"; // 注意爆伤显示百分比
document.getElementById("anti-crit").textContent = character.antiCrit;
document.getElementById("speed").textContent = character.speed;
document.getElementById("luck").textContent = character.luck;

// 更新当前地图
document.getElementById("map-name").textContent = currentMap;

// script.js (继续添加)

let goldPerSecond = 1; // 每秒增长金币数量

setInterval(function() {
    character.gold += goldPerSecond;
    document.getElementById("gold").textContent = character.gold; // 更新金币显示
}, 1000); // 每 1000 毫秒 (1 秒) 执行一次

// script.js (继续添加)

let functionButton1 = document.querySelectorAll(".function-button")[0]; // 获取第一个功能按钮

functionButton1.addEventListener("click", function() {
    alert("你点击了功能1按钮！"); // 简单的弹窗提示
    // 这里可以添加更复杂的功能逻辑
});

// ... 你可以为其他按钮添加类似的事件监听 ...