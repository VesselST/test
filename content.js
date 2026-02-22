// js/content.js
const SITE_CONTENT = {
    home: {
        title: "Chi Wen-Hao: From Struggle to Global Success",
        videoUrl: "https://drive.google.com/file/d/1CugabBcDdUjdSwFeZRlgcrwtL0ZVdfas/preview",
        summary: "President of WEVER Group. In 1974, he founded the company from scratch..."
    },
    philosophy: {
        title: "The Five Bright Hearts",
        items: [
            "A kind heart in how one treats others",
            "A conscientious heart in how one works",
            "A calm and balanced heart in times of success",
            "A reflective heart in times of adversity",
            "An unwavering heart grounded in faith"
        ]
    }
    // ... 其他章節類推
};

function generateNav(navItems) {
    const navContainer = document.querySelector('#navbar');
    navItems.forEach(item => {
        const link = document.createElement('a');
        link.textContent = item.name;
        link.href = `#${item.id}`;
        navContainer.appendChild(link);
    });
}