let primaryClicks = 0;

// Elements
const primaryBtn = document.getElementById("primaryBtn");
const primaryCount = document.getElementById("primaryCount");
const primaryMsg = document.getElementById("primaryMsg");

const secondaryBtn = document.getElementById("secondaryBtn");
const toggleBtn = document.getElementById("toggleBtn");
const secondaryMsg = document.getElementById("secondaryMsg");

const dangerBtn = document.getElementById("dangerBtn");
const dangerMsg = document.getElementById("dangerMsg");

// --------------------
// 1) PRIMARY BUTTON
// --------------------
primaryBtn.addEventListener("click", async () => {
  primaryClicks++;
  primaryCount.textContent = primaryClicks;

  const res = await fetch("/api/primary-click");
  const data = await res.json();
  primaryMsg.textContent = data.message;
});

// --------------------
// 2) SECONDARY BUTTON
// --------------------
secondaryBtn.addEventListener("click", () => {
  secondaryMsg.textContent = "Secondary button clicked!";
});

toggleBtn.addEventListener("click", () => {
  if (secondaryBtn.disabled) {
    secondaryBtn.disabled = false;
    toggleBtn.textContent = "Disable Secondary";
    secondaryMsg.textContent = "Secondary button enabled ✅";
  } else {
    secondaryBtn.disabled = true;
    toggleBtn.textContent = "Enable Secondary";
    secondaryMsg.textContent = "Secondary button disabled ❌";
  }
});

// --------------------
// 3) DANGER BUTTON
// --------------------
dangerBtn.addEventListener("click", async () => {
  const confirmAction = confirm("⚠ Are you sure you want to run this danger action?");
  if (!confirmAction) {
    dangerMsg.textContent = "Danger action cancelled ❌";
    return;
  }

  // Loading state
  dangerBtn.disabled = true;
  dangerBtn.textContent = "Processing... ⏳";
  dangerMsg.textContent = "Please wait...";

  const res = await fetch("/api/danger-action");
  const data = await res.json();

  dangerMsg.textContent = data.message;

  // Back to normal
  dangerBtn.disabled = false;
  dangerBtn.textContent = "Danger Button";
});
