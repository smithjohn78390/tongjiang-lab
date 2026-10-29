# 铜匠实验室

[English](README.md) | 简体中文

**免费、可交互的高中科学 3D 实验课件，覆盖物理、化学、生物、地理。**

在线使用：**https://lab.tongjiang.app**

目前共 54 门。每门课都是**一个独立的 HTML 文件**，约 1 MB：双击就能打开，断网、投影、电子白板都能用。每门课是一个 3D 世界，配常驻中控台、主线问题和步骤条，老师按「下一步」就能从头讲到尾。

内容依据中国普通高中课程标准与人教版（2019）教材编写。课件界面目前是中文，其他语言在计划中。

## 怎么用

- **在线**：点下面表格里的 **▶ 在线上课**。在 GitHub 上点开 HTML 文件只会显示代码，要看课件请用这些链接。
- **离线**：在 [Releases](https://github.com/smithjohn78390/tongjiang-lab/releases/latest) 下载全部课件的压缩包，或者在 https://lab.tongjiang.app 的课程页下载单门课，用 Chrome 或 Edge 打开。解压后双击 `index.html` 可进入课程目录（课件内「回家」按钮也指向它）。
- **嵌入**：`<iframe src="https://lab.tongjiang.app/<slug>" width="100%" style="aspect-ratio:16/9;border:0" allow="fullscreen"></iframe>`
- **数据**：[`catalog.json`](catalog.json) 列出每门课的教材位置和步骤。

## 课程

### 物理（10 门）

| 课程 | 教材位置（人教版 2019） | 步数 | 打开 | 源文件 |
|---|---|---|---|---|
| [光电效应](https://lab.tongjiang.app/c/photoelectric-step/) | 选择性必修第三册 · 第四章 原子结构和波粒二象性 · 第二节 光电效应 | 9 | [▶ 在线上课](https://lab.tongjiang.app/photoelectric-step) | [HTML](courses/photoelectric-step.html) |
| [观察电容器的充放电](https://lab.tongjiang.app/c/capacitor-step/) | 必修第三册 · 第十章 静电场中的能量 · 第四节 电容器的电容 · 学生必做实验：观察电容器的充放电 | 9 | [▶ 在线上课](https://lab.tongjiang.app/capacitor-step) | [HTML](courses/capacitor-step.html) |
| [实验：探究加速度与力、质量的关系](https://lab.tongjiang.app/c/accel-force-step/) | 必修第一册 · 第四章 运动和力的关系 · 第二节 实验：探究加速度与力、质量的关系 | 8 | [▶ 在线上课](https://lab.tongjiang.app/accel-force-step) | [HTML](courses/accel-force-step.html) |
| [实验：验证机械能守恒定律](https://lab.tongjiang.app/c/energy-step/) | 必修第二册 · 第八章 机械能守恒定律 · 第五节 实验：验证机械能守恒定律 | 8 | [▶ 在线上课](https://lab.tongjiang.app/energy-step) | [HTML](courses/energy-step.html) |
| [实验：探究平抛运动的特点](https://lab.tongjiang.app/c/projectile-step/) | 必修第二册 · 第五章 抛体运动 · 第三节 实验：探究平抛运动的特点 | 9 | [▶ 在线上课](https://lab.tongjiang.app/projectile-step) | [HTML](courses/projectile-step.html) |
| [探究向心力大小与半径、角速度、质量的关系](https://lab.tongjiang.app/c/centripetal-step/) | 必修第二册 · 第六章 圆周运动 · 第二节 向心力 · 实验：探究向心力大小与半径、角速度、质量的关系 | 8 | [▶ 在线上课](https://lab.tongjiang.app/centripetal-step) | [HTML](courses/centripetal-step.html) |
| [自感与涡流](https://lab.tongjiang.app/c/self-induction-step/) | 选择性必修第二册 · 第二章 电磁感应 · 第四节 互感和自感 | 9 | [▶ 在线上课](https://lab.tongjiang.app/self-induction-step) | [HTML](courses/self-induction-step.html) |
| [测电源电动势和内阻](https://lab.tongjiang.app/c/emf-step/) | 必修第三册 · 第十二章 电能 能量守恒定律 · 第三节 实验：电池电动势和内阻的测量 | 9 | [▶ 在线上课](https://lab.tongjiang.app/emf-step) | [HTML](courses/emf-step.html) |
| [电流的磁场](https://lab.tongjiang.app/c/current-field-step/) | 必修第三册 · 第十三章 电磁感应与电磁波初步 · 第一节 磁场 磁感线 | 9 | [▶ 在线上课](https://lab.tongjiang.app/current-field-step) | [HTML](courses/current-field-step.html) |
| [布朗运动与扩散](https://lab.tongjiang.app/c/brownian-step/) | 选择性必修第三册 · 第一章 分子动理论 · 第一节 分子动理论的基本内容 | 9 | [▶ 在线上课](https://lab.tongjiang.app/brownian-step) | [HTML](courses/brownian-step.html) |

### 化学（25 门）

| 课程 | 教材位置（人教版 2019） | 步数 | 打开 | 源文件 |
|---|---|---|---|---|
| [合成氨工业](https://lab.tongjiang.app/c/haber-step/) | 选择性必修1 化学反应原理 · 第二章 化学反应速率与化学平衡 · 第四节 化学反应的调控 | 7 | [▶ 在线上课](https://lab.tongjiang.app/haber-step) | [HTML](courses/haber-step.html) |
| [化学反应速率的影响因素](https://lab.tongjiang.app/c/rate-step/) | 必修第二册 · 第六章 化学反应与能量 · 实验活动7 化学反应速率的影响因素 | 8 | [▶ 在线上课](https://lab.tongjiang.app/rate-step) | [HTML](courses/rate-step.html) |
| [搭建球棍模型认识有机化合物分子结构](https://lab.tongjiang.app/c/ball-stick-step/) | 必修第二册 · 第七章 有机化合物 · 实验活动8 搭建球棍模型认识有机化合物分子结构 | 9 | [▶ 在线上课](https://lab.tongjiang.app/ball-stick-step) | [HTML](courses/ball-stick-step.html) |
| [强酸与强碱的中和滴定](https://lab.tongjiang.app/c/titration-step/) | 选择性必修1 化学反应原理 · 第三章 水溶液中的离子反应与平衡 · 第二节 水的电离和溶液的pH · 酸碱中和滴定 · 实验活动2 | 9 | [▶ 在线上课](https://lab.tongjiang.app/titration-step) | [HTML](courses/titration-step.html) |
| [氯气的制备及性质](https://lab.tongjiang.app/c/chlorine-step/) | 必修第一册 · 第二章 海水中的重要元素——钠和氯 · 第二节 氯及其化合物 | 9 | [▶ 在线上课](https://lab.tongjiang.app/chlorine-step) | [HTML](courses/chlorine-step.html) |
| [高炉炼铁](https://lab.tongjiang.app/c/blast-furnace-step/) | 必修第二册 · 第八章 化学与可持续发展 · 第一节 自然资源的开发利用 · 金属矿物的开发利用 | 8 | [▶ 在线上课](https://lab.tongjiang.app/blast-furnace-step) | [HTML](courses/blast-furnace-step.html) |
| [金属冶炼：电解熔融盐 + 铝热](https://lab.tongjiang.app/c/smelting-step/) | 必修第二册 · 第八章 化学与可持续发展 · 第一节 自然资源的开发利用 · 金属矿物的开发利用 | 8 | [▶ 在线上课](https://lab.tongjiang.app/smelting-step) | [HTML](courses/smelting-step.html) |
| [煤的综合利用：以煤的气化为主线](https://lab.tongjiang.app/c/coal-gas-step/) | 必修第二册 · 第八章 化学与可持续发展 · 第一节 自然资源的开发利用 · 煤的综合利用 | 8 | [▶ 在线上课](https://lab.tongjiang.app/coal-gas-step) | [HTML](courses/coal-gas-step.html) |
| [接触法制硫酸](https://lab.tongjiang.app/c/sulfuric-step/) | 必修第二册 · 第五章 化工生产中的重要非金属元素 · 第一节 硫及其化合物 · 工业制硫酸 | 7 | [▶ 在线上课](https://lab.tongjiang.app/sulfuric-step) | [HTML](courses/sulfuric-step.html) |
| [盐类的水解及其应用](https://lab.tongjiang.app/c/hydrolysis-step/) | 选择性必修1 化学反应原理 · 第三章 水溶液中的离子反应与平衡 · 第三节 盐类的水解 · 实验活动3 盐类水解的应用 | 9 | [▶ 在线上课](https://lab.tongjiang.app/hydrolysis-step) | [HTML](courses/hydrolysis-step.html) |
| [工业制水泥](https://lab.tongjiang.app/c/cement-step/) | 必修第二册 · 第五章 化工生产中的重要非金属元素 · 第三节 无机非金属材料 | 8 | [▶ 在线上课](https://lab.tongjiang.app/cement-step) | [HTML](courses/cement-step.html) |
| [铁及其化合物：铁的价态转化](https://lab.tongjiang.app/c/iron-step/) | 必修第一册 · 第三章 铁 金属材料 · 第一节 铁及其化合物 | 9 | [▶ 在线上课](https://lab.tongjiang.app/iron-step) | [HTML](courses/iron-step.html) |
| [电解原理：电解氯化铜溶液与饱和食盐水](https://lab.tongjiang.app/c/electrolysis-step/) | 选择性必修1 化学反应原理 · 第四章 化学反应与电能 · 第二节 电解池 · 电解氯化铜溶液 · 电解饱和食盐水 | 9 | [▶ 在线上课](https://lab.tongjiang.app/electrolysis-step) | [HTML](courses/electrolysis-step.html) |
| [氨的制备与性质（含喷泉实验）](https://lab.tongjiang.app/c/ammonia-step/) | 必修第二册 · 第五章 化工生产中的重要非金属元素 · 第二节 氮及其化合物 · 氨和铵盐 | 9 | [▶ 在线上课](https://lab.tongjiang.app/ammonia-step) | [HTML](courses/ammonia-step.html) |
| [探究影响化学平衡移动的因素](https://lab.tongjiang.app/c/equilibrium-step/) | 选择性必修1 化学反应原理 · 第二章 化学反应速率与化学平衡 · 实验活动1 探究影响化学平衡移动的因素 | 9 | [▶ 在线上课](https://lab.tongjiang.app/equilibrium-step) | [HTML](courses/equilibrium-step.html) |
| [焰色试验与原子光谱](https://lab.tongjiang.app/c/flame-step/) | 必修第一册 · 第二章 海水中的重要元素——钠和氯 · 第一节 钠及其化合物 · 焰色试验 | 8 | [▶ 在线上课](https://lab.tongjiang.app/flame-step) | [HTML](courses/flame-step.html) |
| [原电池：单液到双液](https://lab.tongjiang.app/c/galvanic-step/) | 必修第二册 · 第六章 化学反应与能量 · 第一节 化学反应与能量变化 · 实验活动6 化学能转化成电能 | 9 | [▶ 在线上课](https://lab.tongjiang.app/galvanic-step) | [HTML](courses/galvanic-step.html) |
| [电解质的电离与溶液导电性、离子反应的实质](https://lab.tongjiang.app/c/conductivity-step/) | 必修第一册 · 第一章 物质及其变化 · 第二节 离子反应 | 9 | [▶ 在线上课](https://lab.tongjiang.app/conductivity-step) | [HTML](courses/conductivity-step.html) |
| [浓、稀硝酸的性质与氮氧化物的转化](https://lab.tongjiang.app/c/nitric-lab-step/) | 必修第二册 · 第五章 化工生产中的重要非金属元素 · 第二节 氮及其化合物 · 一氧化氮和二氧化氮、硝酸 | 9 | [▶ 在线上课](https://lab.tongjiang.app/nitric-lab-step) | [HTML](courses/nitric-lab-step.html) |
| [海水提溴：空气吹出法](https://lab.tongjiang.app/c/bromine-step/) | 必修第二册 · 第八章 化学与可持续发展 · 第一节 自然资源的开发利用 · 海水资源的开发利用 | 7 | [▶ 在线上课](https://lab.tongjiang.app/bromine-step) | [HTML](courses/bromine-step.html) |
| [金属钠的性质（含钠着火扑救）](https://lab.tongjiang.app/c/sodium-step/) | 必修第一册 · 第二章 海水中的重要元素——钠和氯 · 第一节 钠及其化合物 · 活泼的金属单质——钠 | 9 | [▶ 在线上课](https://lab.tongjiang.app/sodium-step) | [HTML](courses/sodium-step.html) |
| [硫、二氧化硫、浓硫酸的性质与不同价态含硫物质的转化](https://lab.tongjiang.app/c/sulfur-step/) | 必修第二册 · 第五章 化工生产中的重要非金属元素 · 第一节 硫及其化合物 | 9 | [▶ 在线上课](https://lab.tongjiang.app/sulfur-step) | [HTML](courses/sulfur-step.html) |
| [吸氧腐蚀与暖贴的设计](https://lab.tongjiang.app/c/corrosion-step/) | 选择性必修1 化学反应原理 · 第四章 化学反应与电能 · 第三节 金属的腐蚀与防护 · 研究与实践：暖贴的设计与制作 | 9 | [▶ 在线上课](https://lab.tongjiang.app/corrosion-step) | [HTML](courses/corrosion-step.html) |
| [氯碱工业](https://lab.tongjiang.app/c/chlor-alkali-step/) | 选择性必修1 化学反应原理 · 第四章 化学反应与电能 · 第二节 电解池 · 电解饱和食盐水 | 8 | [▶ 在线上课](https://lab.tongjiang.app/chlor-alkali-step) | [HTML](courses/chlor-alkali-step.html) |
| [侯氏制碱](https://lab.tongjiang.app/c/hou-soda-step/) | 必修第一册 · 第二章 海水中的重要元素——钠和氯 · 第一节 钠及其化合物 · 情境素材：侯氏制碱法 | 8 | [▶ 在线上课](https://lab.tongjiang.app/hou-soda-step) | [HTML](courses/hou-soda-step.html) |

### 生物（5 门）

| 课程 | 教材位置（人教版 2019） | 步数 | 打开 | 源文件 |
|---|---|---|---|---|
| [植物细胞的吸水和失水](https://lab.tongjiang.app/c/plasmolysis-step/) | 必修1 分子与细胞 · 第4章 细胞的物质输入和输出 · 第1节 被动运输 · 探究·实践：探究植物细胞的吸水和失水 | 8 | [▶ 在线上课](https://lab.tongjiang.app/plasmolysis-step) | [HTML](courses/plasmolysis-step.html) |
| [物质跨膜运输](https://lab.tongjiang.app/c/transport-step/) | 必修1 分子与细胞 · 第4章 细胞的物质输入和输出 | 8 | [▶ 在线上课](https://lab.tongjiang.app/transport-step) | [HTML](courses/transport-step.html) |
| [神经冲动的产生和传导](https://lab.tongjiang.app/c/impulse-step/) | 选择性必修1 稳态与调节 · 第2章 神经调节 · 第3节 神经冲动的产生和传导 | 9 | [▶ 在线上课](https://lab.tongjiang.app/impulse-step) | [HTML](courses/impulse-step.html) |
| [观察根尖分生区组织细胞的有丝分裂](https://lab.tongjiang.app/c/mitosis-step/) | 必修1 分子与细胞 · 第6章 细胞的生命历程 · 第1节 细胞的增殖 · 探究·实践：观察根尖分生区组织细胞的有丝分裂 | 9 | [▶ 在线上课](https://lab.tongjiang.app/mitosis-step) | [HTML](courses/mitosis-step.html) |
| [影响酶活性的条件](https://lab.tongjiang.app/c/enzyme-step/) | 必修1 分子与细胞 · 第5章 细胞的能量供应和利用 · 第1节 降低化学反应活化能的酶 · 探究·实践：影响酶活性的条件 | 8 | [▶ 在线上课](https://lab.tongjiang.app/enzyme-step) | [HTML](courses/enzyme-step.html) |

### 地理（14 门）

| 课程 | 教材位置（人教版 2019） | 步数 | 打开 | 源文件 |
|---|---|---|---|---|
| [河流地貌的发育](https://lab.tongjiang.app/c/river-step/) | 选择性必修1 自然地理基础 · 第二章 地表形态的塑造 · 第三节 河流地貌的发育 | 8 | [▶ 在线上课](https://lab.tongjiang.app/river-step) | [HTML](courses/river-step.html) |
| [太阳直射点的回归运动与四季、五带](https://lab.tongjiang.app/c/insolation-step/) | 选择性必修1 自然地理基础 · 第一章 地球的运动 · 第二节 地球运动的地理意义 · 太阳直射点的回归运动 · 四季和五带 | 9 | [▶ 在线上课](https://lab.tongjiang.app/insolation-step) | [HTML](courses/insolation-step.html) |
| [世界洋流的分布规律与影响](https://lab.tongjiang.app/c/currents-step/) | 选择性必修1 自然地理基础 · 第四章 水的运动 · 第二节 洋流 | 9 | [▶ 在线上课](https://lab.tongjiang.app/currents-step) | [HTML](courses/currents-step.html) |
| [海—气相互作用与厄尔尼诺、拉尼娜](https://lab.tongjiang.app/c/enso-step/) | 选择性必修1 自然地理基础 · 第四章 水的运动 · 第三节 海—气相互作用 | 7 | [▶ 在线上课](https://lab.tongjiang.app/enso-step) | [HTML](courses/enso-step.html) |
| [大气受热过程](https://lab.tongjiang.app/c/heating-step/) | 必修第一册 · 第二章 地球上的大气 · 第二节 大气受热过程和大气运动 · 大气受热过程 | 9 | [▶ 在线上课](https://lab.tongjiang.app/heating-step) | [HTML](courses/heating-step.html) |
| [喀斯特地貌的形成与识别](https://lab.tongjiang.app/c/karst-step/) | 必修第一册 · 第四章 地貌 · 第一节 常见地貌类型 · 喀斯特地貌 | 7 | [▶ 在线上课](https://lab.tongjiang.app/karst-step) | [HTML](courses/karst-step.html) |
| [全球气候变化与国家安全](https://lab.tongjiang.app/c/carbon-step/) | 选择性必修3 资源、环境与国家安全 · 第三章 环境安全与国家安全 · 第四节 全球气候变化与国家安全 | 8 | [▶ 在线上课](https://lab.tongjiang.app/carbon-step) | [HTML](courses/carbon-step.html) |
| [构造地貌的形成](https://lab.tongjiang.app/c/tectonic-step/) | 选择性必修1 自然地理基础 · 第二章 地表形态的塑造 · 第二节 构造地貌的形成 | 6 | [▶ 在线上课](https://lab.tongjiang.app/tectonic-step) | [HTML](courses/tectonic-step.html) |
| [地球运动的地理意义](https://lab.tongjiang.app/c/earth-motion-step/) | 选择性必修1 自然地理基础 · 第一章 地球的运动 · 第二节 地球运动的地理意义 | 9 | [▶ 在线上课](https://lab.tongjiang.app/earth-motion-step) | [HTML](courses/earth-motion-step.html) |
| [土壤的主要形成因素与土壤剖面观察](https://lab.tongjiang.app/c/soil-step/) | 必修第一册 · 第五章 植被与土壤 · 第二节 土壤 | 8 | [▶ 在线上课](https://lab.tongjiang.app/soil-step) | [HTML](courses/soil-step.html) |
| [大气热力环流](https://lab.tongjiang.app/c/thermal-step/) | 必修第一册 · 第二章 地球上的大气 · 第二节 大气受热过程和大气运动 · 热力环流 | 9 | [▶ 在线上课](https://lab.tongjiang.app/thermal-step) | [HTML](courses/thermal-step.html) |
| [大气的水平运动——风](https://lab.tongjiang.app/c/wind-step/) | 必修第一册 · 第二章 地球上的大气 · 第二节 大气受热过程和大气运动 · 大气的水平运动——风 | 8 | [▶ 在线上课](https://lab.tongjiang.app/wind-step) | [HTML](courses/wind-step.html) |
| [水循环的过程与地理意义](https://lab.tongjiang.app/c/water-cycle-step/) | 必修第一册 · 第三章 地球上的水 · 第一节 水循环 | 9 | [▶ 在线上课](https://lab.tongjiang.app/water-cycle-step) | [HTML](courses/water-cycle-step.html) |
| [气压带、风带与三圈环流](https://lab.tongjiang.app/c/circulation-step/) | 选择性必修1 自然地理基础 · 第三章 大气的运动 · 第二节 气压带和风带 | 7 | [▶ 在线上课](https://lab.tongjiang.app/circulation-step) | [HTML](courses/circulation-step.html) |

## 许可

- 课件、封面与目录按 **[CC BY-NC 4.0](LICENSE)** 授权：可以免费使用、分享和修改，须署名「铜匠实验室（https://lab.tongjiang.app）」，不得用于商业用途。
- 课件里打包的第三方代码（three.js，MIT）保留其原有许可，见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
- 与人民教育出版社无隶属关系。

## 作者

**铜匠十点睡觉**，做 3D 可视化：课件、数字孪生、工厂与设备演示。
关注 X：[@CopperForgeAI](https://x.com/CopperForgeAI)。发现错误欢迎提 Issue，或在 X 私信。
