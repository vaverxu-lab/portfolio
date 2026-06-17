/**
 * 作品集交互逻辑 - Portfolio Interaction Logic
 * 包含：作品数据、筛选、卡片动画、详情弹窗
 */

// ==================== 作品数据（基于实际文件） ====================
const portfolioData = [
    // ---- 大屏可视化设计 ----
    {
        id: 1,
        title: '国展数字孪生物联平台',
        category: '大屏可视化设计',
        description: '为国展中心打造的数字孪生物联网管理平台，实时映射展馆运行状态，集成设备监控、人流分析、能耗管理等多维数据，实现智慧展馆的数字化运营管理。',
        cover: 'images/大屏可视化设计/国展数字孪生物联平台.jpg',
        images: ['images/大屏可视化设计/国展数字孪生物联平台.jpg'],
        year: '2025',
        tags: ['数字孪生', '物联网', '数据可视化', '智慧展馆'],
    },
    {
        id: 2,
        title: '南通四预支持专题',
        category: '大屏可视化设计',
        description: '南通城市防汛四预（预报、预警、预演、预案）支持平台三维可视化系统，通过三维 GIS 与实时数据融合，为城市防汛决策提供直观、精准的态势感知能力。',
        cover: 'images/大屏可视化设计/南通四预支持专题-三维.jpg',
        images: ['images/大屏可视化设计/南通四预支持专题-三维.jpg'],
        year: '2025',
        tags: ['三维可视化', 'GIS', '城市防汛', '智慧城市'],
    },
    {
        id: 3,
        title: '启东二污大屏系统',
        category: '大屏可视化设计',
        description: '启东污水处理厂数字化监控大屏，实时展示污水处理全流程数据，涵盖进水水质、处理工艺参数、排放监测等关键指标，助力环保设施智慧化运维。',
        cover: 'images/大屏可视化设计/启东二污大屏首页.jpg',
        images: [
            'images/大屏可视化设计/启东二污大屏首页.jpg',
            'images/大屏可视化设计/启动二污大屏首页12.jpg',
        ],
        year: '2024',
        tags: ['环境监测', '污水处理', '工业大屏', '数据可视化'],
    },
    {
        id: 4,
        title: '亚青会数字孪生物联网平台',
        category: '大屏可视化设计',
        description: '为亚青会打造的综合性数字孪生物联网平台，集成场馆管理、梯控系统、安防监控等多维数据，以数字孪生技术赋能大型赛事智慧运营。',
        cover: 'images/大屏可视化设计/亚青会物联网平台.jpg',
        images: [
            'images/大屏可视化设计/亚青会物联网平台.jpg',
            'images/大屏可视化设计/亚青会数字孪生物联网平台-梯控.jpg',
        ],
        year: '2024',
        tags: ['数字孪生', '物联网', '赛事管理', '智慧场馆'],
    },
    {
        id: 5,
        title: '玉溪市智慧河湖平台',
        category: '大屏可视化设计',
        description: '玉溪市河湖管理可视化平台，整合水文监测、水质分析、巡查管理等数据，通过可视化大屏实现河湖生态的全面感知与智能管控。',
        cover: 'images/大屏可视化设计/玉溪市智慧河湖平台.jpg',
        images: ['images/大屏可视化设计/玉溪市智慧河湖平台.jpg'],
        year: '2024',
        tags: ['河湖管理', '环境监测', 'GIS', '智慧水务'],
    },
    {
        id: 6,
        title: '视频取流监控平台',
        category: '大屏可视化设计',
        description: '多路视频取流与智能监控管理平台，支持大规模视频流的实时接入、分发与智能分析，为安防监控场景提供高可用的视频数据处理能力。',
        cover: 'images/大屏可视化设计/视频取流平台 - 副本.jpg',
        images: ['images/大屏可视化设计/视频取流平台 - 副本.jpg'],
        year: '2024',
        tags: ['视频监控', '流媒体', '安防平台', '智能分析'],
    },
    // ---- 海报设计 ----
    {
        id: 7,
        title: '博雷顿智驾核心技术',
        category: '海报设计',
        description: '为博雷顿品牌打造的智驾核心技术系列海报，以科技感视觉语言呈现自动驾驶核心技术优势，强化品牌在智慧矿山领域的技术引领形象。',
        cover: 'images/海报设计/博雷顿智驾核心技术 拷贝.jpg',
        images: [
            'images/海报设计/博雷顿智驾核心技术 拷贝.jpg',
            'images/海报设计/博雷顿智驾核心技术1.jpg',
        ],
        year: '2025',
        tags: ['科技海报', '汽车', '品牌视觉'],
    },
    {
        id: 8,
        title: '矿山机械系列海报',
        category: '海报设计',
        description: '矿山机械产品系列宣传海报，以硬朗有力的视觉风格展现重型装备的工业力量感，凸显产品在矿山作业场景中的卓越性能。',
        cover: 'images/海报设计/矿山海报.jpg',
        images: [
            'images/海报设计/矿山海报.jpg',
            'images/海报设计/矿山海报1.jpg',
            'images/海报设计/发布会封面_矿山版 拷贝.jpg',
        ],
        year: '2024',
        tags: ['工业设计', '机械装备', '矿山'],
    },
    {
        id: 9,
        title: '视觉物料与PPT设计',
        category: '海报设计',
        description: '企业视觉物料与商务演示设计，涵盖产品推介、企业宣传等多场景应用，以统一视觉语言构建品牌识别度。',
        cover: 'images/海报设计/视觉物料设计.jpg',
        images: [
            'images/海报设计/视觉物料设计.jpg',
            'images/海报设计/视觉物料设计1.jpg',
            'images/海报设计/PPT设计.jpg',
        ],
        year: '2024',
        tags: ['视觉设计', '品牌物料', 'PPT设计'],
    },
    {
        id: 10,
        title: '户外广告设计',
        category: '海报设计',
        description: '户外场景广告创意设计，结合环境特点与品牌诉求，打造高辨识度的户外视觉传达方案。',
        cover: 'images/海报设计/室外海报.jpeg',
        images: ['images/海报设计/室外海报.jpeg'],
        year: '2024',
        tags: ['户外广告', '创意设计', '品牌传播'],
    },
    // ---- 图标设计 ----
    {
        id: 11,
        title: '系统功能图标集',
        category: '图标设计',
        description: '为多款软件系统设计的核心功能图标集，涵盖数据管理、系统设置、业务操作等场景，风格统一、识别性强，提升产品界面品质感。',
        cover: 'images/图标设计/核心功能.jpg',
        images: [
            'images/图标设计/核心功能.jpg',
            'images/图标设计/扁平化图标.jpg',
        ],
        year: '2025',
        tags: ['功能图标', 'UI设计', '系统图标'],
    },
    {
        id: 12,
        title: '乘车场景图标集',
        category: '图标设计',
        description: '针对乘车出行场景设计的专题图标集，涵盖交通标识、车辆状态、导航指引等视觉元素，以简洁清晰的图形语言提升用户出行体验。',
        cover: 'images/图标设计/乘车场景图标.jpg',
        images: ['images/图标设计/乘车场景图标.jpg'],
        year: '2024',
        tags: ['场景图标', '出行', '交通'],
    },
    {
        id: 13,
        title: '春节主题图标',
        category: '图标设计',
        description: '融合春节传统文化元素的创意图标设计，以现代扁平化手法重新演绎传统节庆符号，适用于移动应用节日主题换肤与运营活动。',
        cover: 'images/图标设计/渐变扁平风春节主题图标.jpg',
        images: ['images/图标设计/渐变扁平风春节主题图标.jpg'],
        year: '2025',
        tags: ['节日主题', '扁平化', '传统文化'],
    },
    {
        id: 14,
        title: '汽车主题图标集',
        category: '图标设计',
        description: '为汽车相关应用设计的主题图标集，涵盖车辆控制、驾驶模式、车载功能等视觉符号，以渐变扁平风格呈现现代科技感。',
        cover: 'images/图标设计/渐变扁平风汽车主题图标.jpg',
        images: [
            'images/图标设计/渐变扁平风汽车主题图标.jpg',
            'images/图标设计/矿山图标.jpg',
        ],
        year: '2024',
        tags: ['汽车', '渐变风格', '车载图标'],
    },
    {
        id: 15,
        title: '清新可爱风格图标',
        category: '图标设计',
        description: '面向年轻用户群体的清新可爱风格图标设计，以柔和色彩、圆润造型和趣味细节打造亲和力十足的视觉语言。',
        cover: 'images/图标设计/清新可爱的图标.jpg',
        images: ['images/图标设计/清新可爱的图标.jpg'],
        year: '2024',
        tags: ['可爱风格', '色彩设计', '年轻化'],
    },
   // ---- APP 设计 ----
    {
        id: 16,
        title: '会展场馆APP',
        category: 'APP设计',
        description: '一站式会展场馆服务APP设计，涵盖场馆概况浏览、通行二维码核验、展会排期查询、在线客服咨询、证件申请等核心功能，为参展商与观众提供便捷高效的会展全流程数字化服务体验。',
        cover: 'images/APP设计/APP首页.jpg',
        images: [
            'images/APP设计/APP首页.jpg',
            'images/APP设计/启动页.jpg',
            'images/APP设计/APP-场馆概况.jpg',
            'images/APP设计/APP-通行二维码.jpg',
            'images/APP设计/APP-展会排期  - 副本.jpg',
            'images/APP设计/APP-我的.jpg',
            'images/APP设计/在线客服.jpg',
            'images/APP设计/证件申请.jpg',
            'images/APP设计/注册页.jpg',
        ],
        year: '2025',
        tags: ['移动端', '会展服务', 'UI/UX设计', '场馆数字化'],
    },
    {
        id: 17,
        title: '智慧农业APP',
        category: 'APP设计',
        description: '智慧农业移动端应用设计，整合农田监测、农事管理、市场行情等核心功能，为现代农业提供便捷高效的数字化管理工具。',
        cover: 'images/APP设计/智慧农业-登录.jpg',
        images: ['images/APP设计/智慧农业-登录.jpg'],
        year: '2025',
        tags: ['移动端', '农业科技', 'UI设计', 'UX设计'],
    },
    // ---- 插画设计 ----
    {
        id: 18,
        title: '春节主题插画',
        category: '插画设计',
        description: '以春节为主题的原创插画创作，融合传统节日元素与现代插画技法，营造喜庆祥和的节日氛围。',
        cover: 'images/插画设计/春节插画.jpeg',
        images: ['images/插画设计/春节插画.jpeg'],
        year: '2025',
        tags: ['插画', '节日文化', '原创'],
    },
    // ---- 字体设计 ----
    {
        id: 19,
        title: '羲衡智能品牌字体',
        category: '字体设计',
        description: '为羲衡智能品牌定制的中文字体设计，融合科技感与人文气质，通过字形结构与笔画细节传达品牌的创新精神与专业形象。',
        cover: 'images/字体设计/羲衡智能.jpeg',
        images: ['images/字体设计/羲衡智能.jpeg'],
        year: '2024',
        tags: ['字体设计', '品牌定制', '标志设计'],
    },
    {
        id: 20,
        title: '博雷顿品牌字体',
        category: '字体设计',
        description: '为博雷顿品牌定制的专属字体设计，以硬朗有力的字形风格呼应品牌在矿山机械与智驾领域的核心技术定位，强化品牌视觉识别。',
        cover: 'images/字体设计/博雷顿.jpeg',
        images: [
            'images/字体设计/博雷顿.jpeg',
            'images/字体设计/BRETON.jpeg',
        ],
        year: '2025',
        tags: ['品牌定制', '企业字体', 'Logo设计'],
    },
    {
        id: 21,
        title: '纹画逸梦艺术字体',
        category: '字体设计',
        description: '"纹画逸梦"主题艺术字体创作，以流畅的线条与优雅的笔画呈现梦幻唯美的视觉气质，适用于品牌标识、封面设计等高端视觉场景。',
        cover: 'images/字体设计/纹画逸梦.jpeg',
        images: ['images/字体设计/纹画逸梦.jpeg'],
        year: '2025',
        tags: ['艺术字体', '创意字体', '装饰设计'],
    },
    {
        id: 22,
        title: '新年快乐节日字体',
        category: '字体设计',
        description: '"新年快乐"节日主题字体设计，融合传统年味元素与现代字体造型，以喜庆祥和的视觉风格适用于春节相关的各类视觉物料。',
        cover: 'images/字体设计/新年快乐.jpeg',
        images: ['images/字体设计/新年快乐.jpeg'],
        year: '2025',
        tags: ['节日字体', '传统文化', '创意设计'],
    },
    // ---- 视频作品（大屏可视化） ----
    {
        id: 23,
        title: '城市防汛可视化平台',
        category: '视频作品',
        description: '城市防汛指挥可视化平台的动态演示，展示实时雨情监测、积水预警、应急调度等核心功能在防汛决策中的关键作用。',
        cover: '',
        video: 'videos/城市防汛可视化平台.mp4',
        year: '2025',
        tags: ['防汛指挥', '数据可视化', '实时监测'],
    },
    {
        id: 24,
        title: '智慧水利可视化平台',
        category: '视频作品',
        description: '智慧水利综合管理平台动态展示，整合水文监测、水资源调度、防洪抗旱等业务模块，以可视化手段提升水利管理效能。',
        cover: '',
        video: 'videos/智慧水利可视化平台.mp4',
        year: '2025',
        tags: ['水利管理', '水文监测', '水资源调度'],
    },
    {
        id: 25,
        title: '智慧办公园区可视化平台',
        category: '视频作品',
        description: '智慧办公园区综合管理平台演示，集成楼宇管控、能耗管理、安防监控、智能停车等功能，打造高效绿色的智慧园区标杆。',
        cover: '',
        video: 'videos/智慧办公园区可视化平台.mp4',
        year: '2025',
        tags: ['智慧园区', '楼宇管理', '综合管控'],
    },
    {
        id: 26,
        title: '数字化园区集成大脑平台',
        category: '视频作品',
        description: '数字化园区集成大脑平台动态展示，以园区数字孪生为底座，整合多源数据与智能分析能力，实现园区运营的全面感知与智能决策。',
        cover: '',
        video: 'videos/数字化园区集成大脑平台.mp4',
        year: '2024',
        tags: ['数字孪生', '园区管理', '集成平台'],
    },
    {
        id: 27,
        title: '北京制造工业数据平台',
        category: '视频作品',
        description: '北京制造工业数据平台演示，汇聚工业生产全链条数据，通过可视化分析助力制造业数字化转型与智能制造升级。',
        cover: '',
        video: 'videos/北京制造工业数据平台.mp4',
        year: '2024',
        tags: ['工业互联网', '智能制造', '数据分析'],
    },
    {
        id: 28,
        title: '未来科技城可视化平台',
        category: '视频作品',
        description: '未来科技城数字可视化平台展示，以城市级三维场景为载体，集成城市规划、产业布局、公共服务等数据，描绘数字未来城市蓝图。',
        cover: '',
        video: 'videos/未来科技城可视化.mp4',
        year: '2024',
        tags: ['城市可视化', '数字城市', '三维场景'],
    },
    {
        id: 29,
        title: '杭州市人才服务大屏',
        category: '视频作品',
        description: '杭州市人才服务大数据平台动态展示，多维度呈现人才引进、培养、服务等数据指标，以可视化赋能人才工作科学决策。',
        cover: '',
        video: 'videos/杭州市人才大屏.mp4',
        year: '2024',
        tags: ['人才大数据', '政务服务', '数据大屏'],
    },
    {
        id: 30,
        title: '网络信息链路拓扑监控',
        category: '视频作品',
        description: '网络信息链路拓扑健康监控平台，实时展示网络节点状态、链路负载、故障告警等信息，保障信息基础设施稳定运行。',
        cover: '',
        video: 'videos/网络信息链路拓扑健康.mp4',
        year: '2024',
        tags: ['网络监控', '链路拓扑', '运维管理'],
    },
    {
        id: 31,
        title: '销售数据可视化平台',
        category: '视频作品',
        description: '销售数据可视化分析平台，对销售业绩、市场趋势、客户画像等数据进行多维度可视化呈现，赋能业务决策与市场洞察。',
        cover: '',
        video: 'videos/销售可视化平台.mp4',
        year: '2024',
        tags: ['销售分析', '商业智能', '数据看板'],
    },
    {
        id: 32,
        title: '无人驾驶监控平台',
        category: '视频作品',
        description: '无人驾驶车辆监控管理平台，实时展示车辆状态、行驶轨迹、路况感知等数据，为自动驾驶运营提供全方位监控保障。',
        cover: '',
        video: 'videos/无人驾驶首页 拷贝.mp4',
        year: '2024',
        tags: ['无人驾驶', '车辆监控', '智能交通'],
    },
    {
        id: 33,
        title: '智慧防疫监控系统',
        category: '视频作品',
        description: '智慧防疫监控管理平台，整合人员健康监测、防疫物资管理、风险区域预警等功能，以数字化手段筑牢疫情防控防线。',
        cover: '',
        video: 'videos/智慧防疫监控系统.mp4',
        year: '2023',
        tags: ['疫情防控', '健康监测', '应急管理'],
    },
    {
        id: 34,
        title: '泵站远程监控系统',
        category: '视频作品',
        description: '泵站远程监控与运维管理平台，对泵站运行状态、流量压力、设备健康等进行实时监测与智能预警，提升泵站运维效率。',
        cover: '',
        video: 'videos/泵站_3.mp4',
        year: '2024',
        tags: ['泵站监控', '远程运维', '工业物联网'],
    },
    {
        id: 35,
        title: '智慧工厂可视化平台',
        category: '视频作品',
        description: '智慧工厂数字孪生可视化平台，以三维场景还原生产线全貌，实时展示生产进度、设备状态、质量检测等核心指标，助力工厂智能化管理。',
        cover: '',
        video: 'videos/智慧工厂化.mp4',
        year: '2024',
        tags: ['智慧工厂', '数字孪生', '生产管理'],
    },
    {
        id: 36,
        title: '用水系改造与检测平台',
        category: '视频作品',
        description: '城市用水系改造与水质检测可视化平台，对供水管网、水质指标、改造进度等进行全面可视化监控，保障城市用水安全。',
        cover: '',
        video: 'videos/用水系改造与检测平台.mp4',
        year: '2024',
        tags: ['水务管理', '水质监测', '管网可视化'],
    },
];

// ==================== 工具函数 ====================
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

function isVideoFile(path) {
    return path && (path.endsWith('.mp4') || path.endsWith('.webm') || path.endsWith('.mov'));
}

function isImageFile(path) {
    return path && (path.endsWith('.jpg') || path.endsWith('.jpeg') || path.endsWith('.png') || path.endsWith('.gif') || path.endsWith('.webp'));
}

// ==================== 筛选功能 ====================
class PortfolioFilter {
    constructor(containerSelector, data) {
        this.container = document.querySelector(containerSelector);
        this.data = data;
        this.activeCategory = '全部';
        this.init();
    }

    init() {
        this.render(this.data);
        this.setupFilterButtons();
        this.setupScrollAnimation();
        this.setupVideoLazyLoad();
    }

    // 视频懒加载：卡片进入视口后才加载视频
    setupVideoLazyLoad() {
        if (!('IntersectionObserver' in window)) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const video = entry.target.querySelector('.card-video');
                    if (video && !video.dataset.loaded) {
                        video.dataset.loaded = 'true';
                        video.preload = 'metadata';
                        // 如果 video 的 src 在 data-src 中，则设置
                        if (video.dataset.src) {
                            video.src = video.dataset.src;
                            video.removeAttribute('data-src');
                        }
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: '200px' }); // 提前200px开始加载

        document.querySelectorAll('.portfolio-card').forEach(card => {
            if (card.querySelector('.card-video')) {
                observer.observe(card);
            }
        });
    }

    render(items) {
        this.container.innerHTML = '';
        
        if (items.length === 0) {
            this.container.innerHTML = '<div class="portfolio-empty">暂无匹配的作品</div>';
            return;
        }

        items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'portfolio-card';
            card.style.setProperty('--card-index', index);
            card.dataset.id = item.id;
            
            // 封面内容
            let coverHtml = '';
            if (item.video) {
                // 从视频路径生成海报路径: videos/xxx.mp4 → videos/posters/xxx.jpg
                const posterPath = item.video.replace(/\.[^.]+$/, '').replace('videos/', 'videos/posters/') + '.jpg';
                coverHtml = `
                    <video class="card-video" data-src="${item.video}" poster="${posterPath}" muted loop preload="none" playsinline></video>
                    <div class="card-play-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/>
                        </svg>
                    </div>
                `;
            } else {
                coverHtml = `<img class="card-img" src="${item.cover}" alt="${item.title}" loading="lazy" decoding="async" onerror="this.style.display='none'" />`;
            }

            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-image">
                        ${coverHtml}
                        <div class="card-overlay">
                            <div class="card-overlay-content">
                                <span class="card-tag">${item.category}</span>
                                <span class="card-year">${item.year}</span>
                            </div>
                        </div>
                        <div class="card-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M7 17L17 7"/>
                                <path d="M7 7h10v10"/>
                            </svg>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="card-meta">
                            <span class="card-category">${item.category}</span>
                            <span class="card-year">${item.year}</span>
                        </div>
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-desc">${item.description.substring(0, 60)}...</p>
                        <div class="card-tags">
                            ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;

            // 视频卡片悬停播放
            if (item.video) {
                const video = card.querySelector('.card-video');
                card.addEventListener('mouseenter', () => {
                    video.play().catch(() => {});
                });
                card.addEventListener('mouseleave', () => {
                    video.pause();
                    video.currentTime = 0;
                });
            }

            card.addEventListener('click', () => {
                this.openDetail(item);
            });

            this.container.appendChild(card);
        });

        // 触发入场动画
        requestAnimationFrame(() => {
            document.querySelectorAll('.portfolio-card').forEach((card, i) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, i * 60);
            });
        });
    }

    getCategories() {
        const categories = ['全部', ...new Set(this.data.map(item => item.category))];
        return categories;
    }

    setupFilterButtons() {
        const filterBar = document.querySelector('.filter-bar');
        const categories = this.getCategories();
        
        filterBar.innerHTML = categories.map(cat => 
            `<button class="filter-btn ${cat === '全部' ? 'active' : ''}" data-category="${cat}">${cat}</button>`
        ).join('');

        filterBar.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-btn');
            if (!btn) return;

            const category = btn.dataset.category;
            this.activeCategory = category;

            // 更新按钮状态
            filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 筛选数据
            const filtered = category === '全部' 
                ? this.data 
                : this.data.filter(item => item.category === category);

            this.render(filtered);
        });
    }

    setupScrollAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
    }

    // ==================== 详情弹窗 ====================
    openDetail(item) {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        
        // 媒体内容
        let mediaHtml = '';
        if (item.video) {
            mediaHtml = `
                <div class="modal-video-wrapper">
                    <video class="modal-video" src="${item.video}" controls autoplay muted playsinline preload="auto"></video>
                </div>
            `;
        } else if (item.images && item.images.length === 1) {
            mediaHtml = `
                <div class="modal-image-wrapper">
                    <img class="modal-img" src="${item.images[0]}" alt="${item.title}" loading="lazy" decoding="async" />
                </div>
            `;
        } else if (item.images && item.images.length > 1) {
            mediaHtml = `
                <div class="modal-gallery">
                    <div class="modal-gallery-main">
                        <img class="modal-gallery-img" src="${item.images[0]}" alt="${item.title}" loading="lazy" decoding="async" />
                    </div>
                    <div class="modal-gallery-thumbs">
                        ${item.images.map((img, i) => `
                            <div class="gallery-thumb ${i === 0 ? 'active' : ''}" data-index="${i}">
                                <img src="${img}" alt="${item.title} - ${i + 1}" loading="lazy" decoding="async" />
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        overlay.innerHTML = `
            <div class="modal-container modal-container-wide">
                <button class="modal-close" aria-label="关闭">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                        <path d="M18 6L6 18"/>
                        <path d="M6 6l12 12"/>
                    </svg>
                </button>
                
                <div class="modal-media">
                    ${mediaHtml}
                </div>

                <div class="modal-body">
                    <div class="modal-meta">
                        <span class="modal-category">${item.category}</span>
                        <span class="modal-year">${item.year}</span>
                    </div>
                    <h2 class="modal-title">${item.title}</h2>
                    
                    <div class="modal-section">
                        <p class="modal-description">${item.description}</p>
                    </div>

                    <div class="modal-tags">
                        ${item.tags.map(tag => `<span class="tag tag-lg">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';

        // 入场动画
        requestAnimationFrame(() => {
            overlay.classList.add('active');
        });

        // 画廊缩略图切换
        if (item.images && item.images.length > 1) {
            const mainImg = overlay.querySelector('.modal-gallery-img');
            const thumbs = overlay.querySelectorAll('.gallery-thumb');
            
            thumbs.forEach(thumb => {
                thumb.addEventListener('click', () => {
                    const idx = parseInt(thumb.dataset.index);
                    mainImg.src = item.images[idx];
                    thumbs.forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                });
            });
        }

        // 关闭
        const close = () => {
            overlay.classList.remove('active');
            setTimeout(() => {
                // 清理视频播放
                const video = overlay.querySelector('video');
                if (video) {
                    video.pause();
                    video.src = '';
                }
                document.body.removeChild(overlay);
                document.body.style.overflow = '';
            }, 400);
        };

        overlay.querySelector('.modal-close').addEventListener('click', close);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) close();
        });

        const escHandler = (e) => {
            if (e.key === 'Escape') {
                close();
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);
    }
}

// ==================== 平滑滚动 ====================
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }
}

// ==================== 导航栏效果 ====================
class Navbar {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.lastScroll = 0;
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }

            if (currentScroll > this.lastScroll && currentScroll > 200) {
                this.navbar.classList.add('hidden');
            } else {
                this.navbar.classList.remove('hidden');
            }

            this.lastScroll = currentScroll;
        });
    }
}

// ==================== 鼠标跟随光晕 ====================
class MouseGlow {
    constructor() {
        this.glow = document.querySelector('.mouse-glow');
        if (!this.glow) return;
        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            this.glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
    }
}

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        new ParticleBackground(canvas);
    }

    const grid = document.getElementById('portfolio-grid');
    if (grid) {
        new PortfolioFilter('#portfolio-grid', portfolioData);
    }

    new Navbar();
    new MouseGlow();
    new SmoothScroll();
    animateCounters();
});

// ==================== 计数器动画 ====================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                const duration = 2000;
                const step = Math.max(1, Math.floor(target / 60));
                let current = 0;
                
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    entry.target.textContent = current + '+';
                }, duration / 60);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}
