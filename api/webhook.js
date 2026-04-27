export default function handler(req, res) {
  if (req.method === 'POST') {
    // นี่คือส่วนที่ LINE จะคุยด้วย ระบบจะตอบกลับ Status 200 ทันที
    console.log('Body: ', req.body);
    res.status(200).send('OK');
  } else {
    // ถ้าเป็นการเปิดดูผ่าน Browser ปกติ (GET)
    res.status(200).send('Webhook Server is running!');
  }
}
