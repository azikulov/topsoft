export function generateRandomOrderId() {
  const min = 1000; // Минимальное значение Order ID
  const max = 999999; // Максимальное значение Order ID
  const orderId = Math.floor(Math.random() * (max - min + 1)) + min;
  return String(orderId);
}
