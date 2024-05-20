import { initPaymentExpireConsumer } from "./paymentExpire";
import { initPaymentNotificationConsumer } from "./paymentNotification";

export default async function initQueueConsumers() {
  initPaymentNotificationConsumer();
  initPaymentExpireConsumer();
}
