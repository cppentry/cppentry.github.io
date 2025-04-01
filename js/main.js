// 获取用户浏览器语言
function getUserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    // 如果浏览器语言以zh开头，返回zh，否则返回en
    return browserLang.startsWith('zh') ? 'zh' : 'en';
}

// 更新页面内容
function updateContent(lang) {
    const t = translations[lang];
    
    // 更新标题
    document.title = t.title;
    
    // 更新导航栏
    document.querySelector('.nav-links a[href="#features"]').textContent = t.nav.features;
    document.querySelector('.nav-links a[href="#download"]').textContent = t.nav.download;
    
    // 更新英雄区域
    document.querySelector('.hero h1').textContent = t.hero.title;
    document.querySelector('.hero p').textContent = t.hero.subtitle;
    
    // 更新功能特点区域
    document.querySelector('#features h2').textContent = t.features.title;
    
    // 更新功能卡片
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards[0].querySelector('h3').textContent = t.features.items.smart.title;
    featureCards[0].querySelector('p').textContent = t.features.items.smart.desc;
    
    featureCards[1].querySelector('h3').textContent = t.features.items.space.title;
    featureCards[1].querySelector('p').textContent = t.features.items.space.desc;
    
    featureCards[2].querySelector('h3').textContent = t.features.items.track.title;
    featureCards[2].querySelector('p').textContent = t.features.items.track.desc;
    
    // 更新下载区域
    document.querySelector('#download h2').textContent = t.download.title;
    
    const downloadOptions = document.querySelectorAll('.download-option');
    downloadOptions[0].querySelector('h3').textContent = t.download.ios.title;
    downloadOptions[0].querySelector('p').textContent = t.download.ios.desc;
    
    downloadOptions[1].querySelector('h3').textContent = t.download.android.title;
    downloadOptions[1].querySelector('p').textContent = t.download.android.desc;
    
    // 更新页脚
    document.querySelector('footer p').textContent = t.footer;
    
    // 更新HTML lang属性
    document.documentElement.lang = lang;
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    const userLang = getUserLanguage();
    updateContent(userLang);
}); 