const IMAGE_SOURCE = {
  label: "LoremFlickr / Flickr CC",
  url: "https://loremflickr.com/",
};

const CATEGORIES = [
  "全部",
  "东北家常",
  "川湘香辣",
  "海鲜河鲜",
  "汤羹锅物",
  "西式日韩",
  "凉菜小食",
  "主食",
  "饮品",
];

const VERIFIED_IMAGE_TOPICS = new Map([
  ["酸辣土豆丝", "food"],
  ["酸汤肥牛", "soup"],
  ["羊肉萝卜汤", "soup"],
  ["紫菜蛋汤", "soup"],
  ["炒空心菜", "food"],
  ["番茄炒蛋", "food"],
  ["牛排", "steak"],
  ["番茄牛尾汤", "soup"],
  ["红烧牛排筒骨牛膝", "soup"],
  ["泡菜", "food"],
  ["酸黄瓜", "food"],
  ["蘸酱菜", "food"],
  ["红烧茄子", "food"],
  ["烤羊肉串羊腰羊肝", "food"],
  ["红烧荷包蛋", "food"],
  ["卤牛肉", "food"],
  ["鸭货", "food"],
  ["老虎菜", "salad"],
  ["皮辣红", "salad"],
]);

const MENU_ITEMS = [
  item(1, "尖椒干豆腐", "东北家常", "tofu,pepper,chinese-food"),
  item(2, "韭菜鸡蛋", "东北家常", "egg,chive,chinese-food"),
  item(3, "酸辣土豆丝", "川湘香辣", "potato,spicy,chinese-food"),
  item(4, "红烧肘子", "东北家常", "braised,pork,food"),
  item(5, "杀猪菜", "东北家常", "pork,stew,chinese-food"),
  item(6, "水煮肉片", "川湘香辣", "sichuan,pork,spicy"),
  item(7, "酸菜鱼", "川湘香辣", "fish,soup,chinese-food"),
  item(8, "酸汤肥牛", "汤羹锅物", "beef,soup,chinese-food"),
  item(9, "毛血旺", "川湘香辣", "sichuan,hotpot,spicy"),
  item(10, "白灼虾", "海鲜河鲜", "shrimp,seafood,food"),
  item(11, "白灼鱿鱼", "海鲜河鲜", "squid,seafood,food"),
  item(12, "炒鸡", "东北家常", "stir-fried,chicken,chinese-food"),
  item(13, "烤鸡翅", "凉菜小食", "chicken,wings,grilled"),
  item(14, "辣椒炒肉", "川湘香辣", "pork,pepper,chinese-food"),
  item(15, "农家一锅出", "东北家常", "stew,pot,chinese-food"),
  item(16, "芹菜香干", "东北家常", "celery,tofu,chinese-food"),
  item(17, "炒花甲", "海鲜河鲜", "clam,seafood,chinese-food"),
  item(18, "羊肉萝卜汤", "汤羹锅物", "lamb,soup,radish"),
  item(19, "紫菜蛋汤", "汤羹锅物", "egg,soup,seaweed"),
  item(20, "撒汤", "汤羹锅物", "chicken,soup,chinese-food"),
  item(21, "炒空心菜", "东北家常", "morning-glory,vegetable,chinese-food"),
  item(22, "三文鱼甜虾刺身", "海鲜河鲜", "salmon,sashimi,shrimp"),
  item(23, "韩式烤五花", "西式日韩", "korean,bbq,pork"),
  item(24, "酸辣鸡杂", "川湘香辣", "chicken,spicy,chinese-food"),
  item(25, "番茄炒蛋", "东北家常", "tomato,egg,chinese-food"),
  item(26, "牛排", "西式日韩", "steak,food"),
  item(27, "番茄牛尾汤", "汤羹锅物", "oxtail,soup,tomato"),
  item(28, "红烧牛排筒骨牛膝", "汤羹锅物", "braised,beef,bone"),
  item(29, "蘑菇芦笋", "西式日韩", "mushroom,asparagus,food"),
  item(30, "泡菜", "凉菜小食", "kimchi,pickle,food"),
  item(31, "酸黄瓜", "凉菜小食", "pickle,cucumber,food"),
  item(32, "蘸酱菜", "凉菜小食", "vegetables,dip,chinese-food"),
  item(33, "麻婆豆腐", "川湘香辣", "mapo,tofu,sichuan"),
  item(34, "红烧茄子", "东北家常", "eggplant,chinese-food"),
  item(35, "德式烤肠", "西式日韩", "sausage,german,food"),
  item(36, "烤羊肉串羊腰羊肝", "凉菜小食", "lamb,skewer,barbecue"),
  item(37, "金枪鱼鸡蛋培根青酱海鲜意面", "西式日韩", "pasta,pesto,seafood"),
  item(38, "芝士火腿恰巴塔", "西式日韩", "ciabatta,cheese,ham"),
  item(39, "三文鱼贝果", "西式日韩", "salmon,bagel,food"),
  item(40, "菠萝披萨", "西式日韩", "pineapple,pizza,food"),
  item(41, "香煎鸡排三文鱼比目鱼牛肋条", "西式日韩", "grilled,chicken,salmon,beef"),
  item(42, "炒饭", "主食", "fried-rice,chinese-food"),
  item(43, "炒面", "主食", "fried-noodles,chinese-food"),
  item(44, "炒粉", "主食", "rice-noodles,chinese-food"),
  item(45, "红烧荷包蛋", "东北家常", "egg,braised,chinese-food"),
  item(46, "糟货", "凉菜小食", "marinated,food,chinese-food"),
  item(47, "卤牛肉", "凉菜小食", "beef,braised,chinese-food"),
  item(48, "鸭货", "凉菜小食", "duck,braised,chinese-food"),
  item(49, "蒜香虾仁", "海鲜河鲜", "shrimp,garlic,seafood"),
  item(50, "糖醋小排", "东北家常", "sweet-sour,pork,ribs"),
  item(51, "清蒸小排", "东北家常", "steamed,pork,ribs"),
  item(52, "精肉炖蛋", "东北家常", "steamed,egg,pork"),
  item(53, "炸猪排", "凉菜小食", "pork,cutlet,fried"),
  item(54, "油煎猪排", "凉菜小食", "pork,chop,pan-fried"),
  item(55, "干煎带鱼小黄鱼", "海鲜河鲜", "fried,fish,seafood"),
  item(56, "糖醋黄鱼", "海鲜河鲜", "sweet-sour,fish,chinese-food"),
  item(57, "红烧鳊鱼", "海鲜河鲜", "braised,fish,chinese-food"),
  item(58, "清蒸鱼", "海鲜河鲜", "steamed,fish,chinese-food"),
  item(59, "蒸海鲜", "海鲜河鲜", "steamed,seafood,food"),
  item(60, "汽锅鸡", "汤羹锅物", "chicken,soup,chinese-food"),
  item(61, "炒螺蛳", "海鲜河鲜", "snail,seafood,chinese-food"),
  item(62, "钵钵鸡", "川湘香辣", "sichuan,chicken,skewer"),
  item(63, "鸡蛋汉堡肉", "西式日韩", "hamburger,egg,steak"),
  item(64, "寿喜锅", "汤羹锅物", "sukiyaki,hotpot,beef"),
  item(65, "椰子鸡", "汤羹锅物", "coconut,chicken,soup"),
  item(66, "炸鸡腿", "凉菜小食", "fried,chicken,leg"),
  item(67, "老虎菜", "凉菜小食", "cilantro,pepper,salad"),
  item(68, "皮辣红", "凉菜小食", "onion,tomato,pepper,salad"),
  item(69, "大盘鸡", "川湘香辣", "xinjiang,chicken,potato"),
  item(70, "部队锅", "汤羹锅物", "budae-jjigae,korean,hotpot"),
  item(71, "鲍鱼红烧肉", "海鲜河鲜", "abalone,pork,braised"),
  item(72, "咖喱鸡", "川湘香辣", "curry,chicken,food"),
  item(73, "鳗鱼饭", "主食", "unagi,rice,japanese"),
  item(74, "黄油啤酒", "饮品", "butterbeer,drink"),
  item(75, "白啤", "饮品", "wheat-beer,drink"),
  item(76, "原浆", "饮品", "craft-beer,drink"),
  item(77, "菠萝啤", "饮品", "pineapple,beer,drink"),
  item(78, "可乐", "饮品", "cola,drink"),
  item(79, "香蕉火龙果奶昔", "饮品", "banana,dragon-fruit,smoothie"),
  item(80, "苏式绿豆汤", "饮品", "mung-bean,soup,dessert"),
  item(81, "酸梅汤", "饮品", "plum,drink,chinese"),
  item(82, "浊酒", "饮品", "rice-wine,drink"),
  item(83, "可尔必思", "饮品", "calpis,drink"),
];

const state = {
  category: "全部",
  search: "",
  cart: readCart(),
};

const els = {
  categoryBar: document.querySelector("#categoryBar"),
  menuGrid: document.querySelector("#menuGrid"),
  noResults: document.querySelector("#noResults"),
  search: document.querySelector("#menuSearch"),
  totalItems: document.querySelector("#totalItems"),
  totalQty: document.querySelector("#totalQty"),
  mobileQty: document.querySelector("#mobileQty"),
  orderCount: document.querySelector("#orderCount"),
  orderList: document.querySelector("#orderList"),
  copyOrder: document.querySelector("#copyOrder"),
  clearCart: document.querySelector("#clearCart"),
  guestName: document.querySelector("#guestName"),
  mealTime: document.querySelector("#mealTime"),
  orderNote: document.querySelector("#orderNote"),
  toast: document.querySelector("#toast"),
};

function item(id, name, category, keywords) {
  const topic = imageTopic(name, category, keywords);
  const imageData = window.MENU_IMAGE_DATA?.[name];
  return {
    id,
    name,
    category,
    image: imageData?.image || imageUrl(topic, id + 900),
    fallback: placeholderImage(name, category),
    sourceLabel: imageData?.credit || IMAGE_SOURCE.label,
    sourceUrl: imageData?.sourceUrl || IMAGE_SOURCE.url,
  };
}

function imageUrl(keywords, lock) {
  return `https://loremflickr.com/720/540/${keywords}?lock=${lock}`;
}

function imageTopic(name, category, keywords) {
  if (VERIFIED_IMAGE_TOPICS.has(name)) {
    return VERIFIED_IMAGE_TOPICS.get(name);
  }
  if (category === "饮品") {
    if (/啤|原浆/.test(name)) return "beer";
    if (/可乐/.test(name)) return "cola";
    if (/奶昔/.test(name)) return "smoothie";
    if (/绿豆汤|酸梅汤/.test(name)) return "dessert";
    return "cocktail";
  }
  if (/鱼|鳗/.test(name)) return "fish";
  if (/虾|鱿|花甲|海鲜|螺蛳|鲍鱼/.test(name)) return "seafood";
  if (/牛|肥牛|牛排|牛尾|牛肋/.test(name)) return "beef";
  if (/鸡|鸡翅|鸡腿/.test(name)) return "chicken";
  if (/羊/.test(name)) return "lamb";
  if (/鸭/.test(name)) return "duck";
  if (/肘|猪|肉|排|培根|五花/.test(name)) return "pork";
  if (/豆腐|香干/.test(name)) return "tofu";
  if (/蛋/.test(name)) return "egg";
  if (/面|粉|意面/.test(name)) return "noodles";
  if (/饭/.test(name)) return "rice";
  if (/披萨/.test(name)) return "pizza";
  if (/贝果/.test(name)) return "bagel";
  if (/恰巴塔/.test(name)) return "sandwich";
  if (/烤肠/.test(name)) return "sausage";
  if (/汤|锅|一锅出/.test(name)) return "soup";
  if (/蘑菇|芦笋/.test(name)) return "mushroom";
  return "food";
}

function placeholderImage(name, category) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 540">
      <rect width="720" height="540" fill="#fff7e9"/>
      <path d="M0 420 C140 360 240 500 360 420 C500 326 580 460 720 374 L720 540 L0 540 Z" fill="#d49a24" opacity=".28"/>
      <circle cx="560" cy="120" r="78" fill="#1d7463" opacity=".18"/>
      <rect x="76" y="82" width="568" height="376" rx="18" fill="none" stroke="#1f1a16" stroke-width="4"/>
      <text x="360" y="238" text-anchor="middle" font-family="serif" font-size="52" font-weight="700" fill="#1f1a16">${name}</text>
      <text x="360" y="306" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#746858">${category}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function readCart() {
  try {
    return JSON.parse(localStorage.getItem("family-kitchen-cart")) || {};
  } catch {
    return {};
  }
}

function writeCart() {
  localStorage.setItem("family-kitchen-cart", JSON.stringify(state.cart));
}

function cartQuantity() {
  return Object.values(state.cart).reduce((sum, qty) => sum + qty, 0);
}

function selectedItems() {
  return Object.entries(state.cart)
    .map(([id, qty]) => ({ ...MENU_ITEMS.find((dish) => dish.id === Number(id)), qty }))
    .filter((dish) => dish.id && dish.qty > 0);
}

function filteredItems() {
  const keyword = state.search.trim().toLowerCase();
  return MENU_ITEMS.filter((dish) => {
    const inCategory = state.category === "全部" || dish.category === state.category;
    const inSearch =
      !keyword ||
      dish.name.toLowerCase().includes(keyword) ||
      dish.category.toLowerCase().includes(keyword);
    return inCategory && inSearch;
  });
}

function renderCategories() {
  const counts = MENU_ITEMS.reduce(
    (acc, dish) => {
      acc[dish.category] = (acc[dish.category] || 0) + 1;
      acc["全部"] += 1;
      return acc;
    },
    { 全部: 0 }
  );

  els.categoryBar.innerHTML = CATEGORIES.map(
    (category) => `
      <button class="category-button" type="button" data-category="${category}" aria-pressed="${
        state.category === category
      }">
        <span>${category}</span>
        <small>${counts[category] || 0}</small>
      </button>
    `
  ).join("");
}

function renderMenu() {
  const dishes = filteredItems();
  els.menuGrid.innerHTML = dishes
    .map((dish) => {
      const qty = state.cart[dish.id] || 0;
      return `
        <article class="dish-card">
          <div class="dish-photo">
            <img src="${dish.image}" alt="${dish.name}" loading="lazy" data-fallback="${dish.fallback}" />
          </div>
          <div class="dish-body">
            <div class="dish-meta">
              <span class="category-pill">${dish.category}</span>
              <a class="source-link" href="${escapeHtml(dish.sourceUrl)}" target="_blank" rel="noreferrer" title="${escapeHtml(dish.sourceLabel)}" aria-label="${dish.name} 图片来源">
                <i data-lucide="image"></i>
              </a>
            </div>
            <h3>${dish.name}</h3>
            <div class="quantity-row" aria-label="${dish.name} 数量">
              <button class="quantity-button" type="button" data-action="decrease" data-id="${dish.id}" aria-label="${dish.name} 减一份">
                <i data-lucide="minus"></i>
              </button>
              <span class="quantity-value ${qty ? "" : "is-zero"}">${qty}</span>
              <button class="quantity-button" type="button" data-action="increase" data-id="${dish.id}" aria-label="${dish.name} 加一份">
                <i data-lucide="plus"></i>
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  els.noResults.hidden = dishes.length > 0;
  document.querySelectorAll(".dish-photo img").forEach((img) => {
    img.addEventListener("error", () => {
      if (img.dataset.fallback && img.src !== img.dataset.fallback) {
        img.src = img.dataset.fallback;
      }
    });
  });
}

function renderCart() {
  const dishes = selectedItems();
  const totalQty = cartQuantity();
  els.totalItems.textContent = MENU_ITEMS.length;
  els.totalQty.textContent = totalQty;
  els.mobileQty.textContent = totalQty;
  els.orderCount.textContent = totalQty;

  if (!dishes.length) {
    els.orderList.innerHTML = `<div class="empty-order">还没选菜</div>`;
    return;
  }

  els.orderList.innerHTML = dishes
    .map(
      (dish) => `
        <div class="order-item">
          <div>
            <strong>${dish.name}</strong>
            <span>${dish.category} · ${dish.qty} 份</span>
          </div>
          <div class="order-mini-actions">
            <button type="button" data-action="decrease" data-id="${dish.id}" aria-label="${dish.name} 减一份">
              <i data-lucide="minus"></i>
            </button>
            <button type="button" data-action="increase" data-id="${dish.id}" aria-label="${dish.name} 加一份">
              <i data-lucide="plus"></i>
            </button>
          </div>
        </div>
      `
    )
    .join("");
}

function render() {
  renderCategories();
  renderMenu();
  renderCart();
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function changeQty(id, direction) {
  const next = Math.max(0, (state.cart[id] || 0) + direction);
  if (next === 0) {
    delete state.cart[id];
  } else {
    state.cart[id] = next;
  }
  writeCart();
  render();
}

function handleClick(event) {
  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    state.category = categoryButton.dataset.category;
    render();
    return;
  }

  const qtyButton = event.target.closest("[data-action][data-id]");
  if (qtyButton) {
    const direction = qtyButton.dataset.action === "increase" ? 1 : -1;
    changeQty(Number(qtyButton.dataset.id), direction);
  }
}

async function copyOrder() {
  const dishes = selectedItems();
  if (!dishes.length) {
    showToast("先选几道菜再复制点单。");
    return;
  }

  const guest = els.guestName.value.trim() || "未填写";
  const time = els.mealTime.value.trim() || "待定";
  const note = els.orderNote.value.trim() || "无";
  const lines = [
    "老吃家饭庄点单",
    `称呼：${guest}`,
    `开饭时间：${time}`,
    `备注：${note}`,
    "",
    ...dishes.map((dish, index) => `${index + 1}. ${dish.name} x ${dish.qty}`),
    "",
    `合计：${cartQuantity()} 份`,
  ];

  try {
    await navigator.clipboard.writeText(lines.join("\n"));
    showToast("点单已复制，可以发给家里掌勺的人了。");
  } catch {
    fallbackCopy(lines.join("\n"));
    showToast("点单已复制。");
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-1000px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char];
  });
}

function clearCart() {
  state.cart = {};
  writeCart();
  render();
  showToast("已清空点单。");
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    els.toast.classList.remove("is-visible");
  }, 2400);
}

els.categoryBar.addEventListener("click", handleClick);
els.menuGrid.addEventListener("click", handleClick);
els.orderList.addEventListener("click", handleClick);
els.copyOrder.addEventListener("click", copyOrder);
els.clearCart.addEventListener("click", clearCart);
els.search.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderMenu();
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

render();
