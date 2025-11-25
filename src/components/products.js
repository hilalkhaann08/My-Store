import Headphones from "../assets/Headphones.png";
import watch from "../assets/watch.png";
import speaker from "../assets/speaker.png";
import mouse from "../assets/mouse.png";
import keyboard from "../assets/keyboard.png";
import monitor from "../assets/monitor.png";
import hub from "../assets/usb-C.png";
import earbuds from "../assets/earbuds.png";
import mobile from "../assets/mobile.png";

const products = [
  {
    id: 'p1',
    title: 'Wireless Headphones',
    price: 59.99,
    description: 'Comfortable over-ear wireless headphones with clear sound.',
    image: Headphones,
    category: 'Audio',
  },
  {
    id: 'p2',
    title: 'Smart Watch',
    price: 99.99,
    description: 'Track fitness, notifications, and more with this smart watch.',
    image: watch,
    category: 'Wearables',
  },
  {
    id: 'p3',
    title: 'Bluetooth Speaker',
    price: 39.99,
    description: 'Portable speaker with rich bass and long battery life.',
    image: speaker,
    category: 'Audio',
  },
  {
    id: 'p4',
    title: 'Gaming Mouse',
    price: 29.99,
    description: 'Ergonomic mouse with programmable buttons and RGB lighting.',
    image: mouse,
    category: 'Accessories',
  },
  {
    id: 'p5',
    title: 'Mechanical Keyboard',
    price: 79.99,
    description: 'Tactile keys and customizable backlight for fast typing.',
    image: keyboard,
    category: 'Accessories',
  },
  {
    id: 'p6',
    title: '4K Monitor',
    price: 299.99,
    description: 'Crisp 27-inch 4K display for work and entertainment.',
    image: monitor,
    category: 'Computers',
  },
  {
    id: 'p7',
    title: 'USB-C Hub',
    price: 24.99,
    description: 'Expand your laptop ports with HDMI, USB-A, and SD card.',
    image: hub,
    category: 'Accessories',
  },
  {
    id: 'p8',
    title: 'Noise-Canceling Earbuds',
    price: 69.99,
    description: 'Compact earbuds with active noise cancelation.',
    image: earbuds,
    category: 'Audio',
  },
  {
    id: 'p9',
    title: 'Mobile Phone',
    price: 999.00,
    description: 'Latest model with 5G, 128GB storage, and 12MP camera.',
    image: mobile,
    category: 'Mobile',
  },
];

export default products;
