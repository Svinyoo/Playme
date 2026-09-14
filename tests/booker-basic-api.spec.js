// @ts-check
import { test, expect } from '@playwright/test';

/**
 * Basic API tests for Restful-Booker.
 *
 * Remark: ไฟล์นี้ใช้เป็นตัวอย่างการทดสอบ API เบื้องต้นด้วย Playwright
 * เพื่อยืนยันว่า service ยังตอบสนองได้ และข้อมูลที่ส่งกลับมีโครงสร้างตามที่คาดไว้
 * ก่อนนำไปเชื่อมกับการทดสอบหน้าเว็บหรือเพิ่มกรณี create / update / delete booking
 */
const BOOKER_API_URL = 'https://restful-booker.herokuapp.com';

test.describe('Restful-Booker API', () => {
  test('health check: service should respond with Created', async ({ request }) => {
    // ใช้ตรวจสอบว่า API service พร้อมใช้งานก่อนเริ่มทดสอบ endpoint อื่น
    const response = await request.get(`${BOOKER_API_URL}/ping`);

    expect(response.status()).toBe(201);
    expect(await response.text()).toBe('Created');
  });

  test('get bookings: response should contain booking IDs', async ({ request }) => {
    // ใช้ตรวจสอบ endpoint สำหรับดึงรายการ booking และรูปแบบข้อมูลที่ตอบกลับ
    const response = await request.get(`${BOOKER_API_URL}/booking`);

    expect(response.ok()).toBeTruthy();

    const bookings = await response.json();
    expect(Array.isArray(bookings)).toBeTruthy();

    // หาก API มีข้อมูล ต้องมี bookingid ซึ่งนำไปใช้เรียกดูรายละเอียด booking ต่อได้
    if (bookings.length > 0) {
      expect(bookings[0]).toHaveProperty('bookingid');
      expect(typeof bookings[0].bookingid).toBe('number');
    }
  });
});
