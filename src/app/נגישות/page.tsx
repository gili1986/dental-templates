import Link from "next/link";

export const metadata = {
  title: "הצהרת נגישות | מרפאת השיניים",
  description: "הצהרת נגישות בהתאם לתקן ישראלי SI 5568",
};

export default function AccessibilityStatement() {
  return (
    <div
      dir="rtl"
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "60px 24px",
        fontFamily: "'Heebo', sans-serif",
        color: "#1a1a1a",
        lineHeight: "1.8",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;600;700&display=swap');`}</style>

      <Link href="/" style={{ color: "#1B4F8A", fontSize: "0.85rem", textDecoration: "none" }}>
        ← חזרה לדף הראשי
      </Link>

      <h1 style={{ fontSize: "2rem", fontWeight: "700", marginTop: "24px", marginBottom: "8px" }}>
        הצהרת נגישות
      </h1>
      <p style={{ color: "#666", marginBottom: "32px", fontSize: "0.9rem" }}>
        עדכון אחרון: 17 במרץ 2026
      </p>

      <section>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px" }}>
          מחויבות לנגישות
        </h2>
        <p>
          אנו במרפאת השיניים מחויבים לאפשר לכלל המשתמשים, לרבות אנשים עם מוגבלויות, לגלוש
          ולהשתמש באתר שלנו בצורה נוחה ונגישה. אנו עושים מאמצים לעמוד בדרישות תקן ישראלי 5568
          (תקן נגישות לתכנים באינטרנט) ברמת WCAG 2.1 AA.
        </p>
      </section>

      <section style={{ marginTop: "32px" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px" }}>
          אמצעי נגישות באתר
        </h2>
        <ul style={{ paddingRight: "20px" }}>
          {[
            "האתר מוצג בכיוון מימין לשמאל (RTL) בשפה העברית",
            "ניתן לנווט באתר באמצעות מקלדת בלבד",
            "קיים כפתור 'דלג לתוכן' בתחילת כל עמוד",
            "כל התמונות כוללות טקסט חלופי (alt text) בעברית",
            "יחס ניגוד הצבעים עומד לפחות ב-4.5:1",
            "אפשרויות להגדלת גודל הטקסט ולניגודיות גבוהה זמינות דרך כפתור הנגישות",
            "כל הכפתורים והלינקים כוללים aria-label",
            "האתר נבנה עם HTML סמנטי",
          ].map((item) => (
            <li key={item} style={{ marginBottom: "8px" }}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: "32px" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px" }}>
          מה אינו נגיש באתר
        </h2>
        <p style={{ marginBottom: "12px" }}>
          למרות מאמצינו, ייתכן שחלק מהתכנים אינם נגישים במלואם:
        </p>
        <ul style={{ paddingRight: "20px" }}>
          {[
            "תכנים מוטמעים מצדדים שלישיים (כגון מפות גוגל, וידאו חיצוני) עשויים שלא לעמוד בדרישות הנגישות",
            "קישורי WhatsApp לפתיחת שיחה עשויים להיות לא נגישים לחלק ממשתמשי קוראי המסך",
            "תמונות דקורטיביות מסוימות שהוזנו על-ידי בעל האתר עשויות להיות ללא טקסט חלופי",
          ].map((item) => (
            <li key={item} style={{ marginBottom: "8px" }}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: "32px" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px" }}>
          רכז נגישות
        </h2>
        <p style={{ marginBottom: "12px" }}>
          רכז/ת הנגישות של המרפאה אחראי/ת על יישום הנגישות ומענה לפניות:
        </p>
        <ul style={{ paddingRight: "20px" }}>
          <li style={{ marginBottom: "8px" }}>שם: ד&quot;ר יעל כהן</li>
          <li style={{ marginBottom: "8px" }}>תפקיד: רכזת נגישות</li>
          <li style={{ marginBottom: "8px" }}>טלפון: 03-555-1234</li>
          <li style={{ marginBottom: "8px" }}>דוא&quot;ל: accessibility@drkohendental.co.il</li>
        </ul>
      </section>

      <section style={{ marginTop: "32px" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px" }}>
          פניות בנושא נגישות
        </h2>
        <p>
          נתקלתם בבעיית נגישות? אנא פנו לרכזת הנגישות בכתובת הדוא&quot;ל או הטלפון המפורטים לעיל.
          אנו מתחייבים לטפל בפנייה תוך 14 ימי עסקים.
        </p>
        <p style={{ marginTop: "12px" }}>
          כתובתנו: רחוב הרצל 42, תל אביב
        </p>
      </section>

      <section style={{ marginTop: "32px" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px" }}>
          מידע נוסף
        </h2>
        <p>
          הצהרה זו נערכה בהתאם להוראות תקן ישראלי SI 5568 המבוסס על WCAG 2.1 AA.
          בדיקת הנגישות האחרונה בוצעה ב-17 במרץ 2026. אנו ממשיכים לבצע בדיקות ושיפורים
          שוטפים על מנת לשמור על רמת נגישות מיטבית.
        </p>
      </section>
    </div>
  );
}
