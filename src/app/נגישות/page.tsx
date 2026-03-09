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
        עדכון אחרון: {new Date().toLocaleDateString("he-IL")}
      </p>

      <section>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px" }}>
          מחויבות לנגישות
        </h2>
        <p>
          אנו במרפאת השיניים מחויבים לאפשר לכלל המשתמשים, לרבות אנשים עם מוגבלויות, לגלוש ולהשתמש
          באתר שלנו בצורה נוחה ונגישה. אנו עושים מאמצים לעמוד בדרישות תקן ישראלי 5568 (תקן
          נגישות לתכנים באינטרנט) ברמת WCAG 2.1 AA.
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
            "אפשרויות להגדלת גודל הטקסט ולניגודיות גבוהה",
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
          פניות בנושא נגישות
        </h2>
        <p>
          אם נתקלתם בבעיה בנגישות האתר, אנא פנו אלינו ואנו נשתדל לטפל בנושא בהקדם:
        </p>
        <ul style={{ paddingRight: "20px", marginTop: "12px" }}>
          <li>טלפון: 03-555-1234</li>
          <li>דוא&quot;ל: accessibility@drkohendental.co.il</li>
          <li>כתובת: רחוב הרצל 42, תל אביב</li>
        </ul>
      </section>

      <section style={{ marginTop: "32px" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px" }}>
          מידע נוסף
        </h2>
        <p>
          הצהרה זו נערכה בהתאם להוראות ועדת הנגישות של מדינת ישראל ולתקן SI 5568 המבוסס על
          WCAG 2.1 AA. אנו ממשיכים לבצע בדיקות ושיפורים על בסיס קבוע.
        </p>
      </section>
    </div>
  );
}
