function sendAlert() {
    alert("تنبيه: أنت بالقرب من شخص مصاب بمرض معدي. يرجى اتخاذ الحذر!");
}

function checkHealth() {
    let health = prompt("كيف تشعر اليوم؟ (جيد / متوسط / مريض)");
    if (health) {
        alert("تم تسجيل حالتك الصحية: " + health);
    }
}

function sendReminder() {
    alert("تذكير: لا تنسَ تناول الغذاء الصحي وشرب كميات كافية من الماء اليوم!");
}