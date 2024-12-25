const showButton = document.getElementById("showButton");
const christmasMessage = document.getElementById("as");

// Bật tắt thông điệp Giáng Sinh
showButton.addEventListener("click", function () {
  if (christmasMessage.style.display === "none") {
    christmasMessage.style.display = "block";
  } else {
    christmasMessage.style.display = "none";
  }
});

// Xử lý nút đóng thông điệp
document.getElementById("closeButton").addEventListener("click", function () {
  document.getElementById("as").style.display = "block";
});

// Hiển thị thông tin khi nhấn nút
document.getElementById("showButton").addEventListener("click", function () {
  var guideInfo = document.getElementById("guideInfo");
  var button = document.getElementById("showButton");

  button.classList.add("hidden");
  guideInfo.classList.remove("hidden");
  guideInfo.classList.add("show");
});

// Ẩn thông tin khi nhấn nút đóng
document.getElementById("closeButton").addEventListener("click", function () {
  var guideInfo = document.getElementById("guideInfo");
  var button = document.getElementById("showButton");

  guideInfo.classList.remove("show");
  setTimeout(function () {
    guideInfo.classList.add("hidden");
    button.classList.remove("hidden");
  }, 500);
});

// Mã hóa nội dung trong footer
document.addEventListener("DOMContentLoaded", function () {
  var encodedText = '&#68;&#101;&#115;&#105;&#103;&#110;&#32;&#98;&#121;&#32;&#80;&#97;&#110;&#98;&#97;&#112;';
  var footer = document.createElement("a");
  footer.innerHTML = encodedText;
  document.body.appendChild(footer);
});

// Hiệu ứng rung cây thông
const treeIcon = document.querySelector(".tree-icon");

treeIcon.addEventListener("mouseenter", function () {
  treeIcon.classList.add("shake-animation");

  treeIcon.addEventListener("animationend", function () {
    treeIcon.classList.remove("shake-animation");
  });
});

// Tạo hiệu ứng tuyết rơi
function createSnowflakes() {
  const snowflakesContainer = document.createElement("div");
  snowflakesContainer.classList.add("snowflakes");
  document.body.appendChild(snowflakesContainer);

  for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    const size = Math.random() * 10 + 5;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 2 + 3}s`;
    snowflake.style.animationDelay = `${Math.random() * 20}s`;
    snowflake.style.setProperty("--random-x", Math.random());

    snowflakesContainer.appendChild(snowflake);
  }
}

window.onload = function () {
  createSnowflakes();

  // Tự động phát nhạc
  const backgroundMusic = document.getElementById("backgroundMusic");
  
  // Phát nhạc khi trang tải xong
  const playMusic = () => {
    backgroundMusic.muted = false; // Bỏ tắt tiếng (nếu đang mute)
    backgroundMusic.play().catch((error) => {
      console.log("Tự động phát bị chặn. Nhạc sẽ phát khi người dùng tương tác.");
    });
  };

  // Thêm sự kiện để phát nhạc nếu autoplay bị chặn
  playMusic();
  document.addEventListener("click", playMusic);
};
