<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isVisible"
        class="modal-overlay"
        @click.self="closeModal"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="modal-content"
          :class="{ 'modal-entering': isVisible }"
        >
          <!-- Close button -->
          <button class="modal-close" @click="closeModal" aria-label="Close modal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <!-- Slot content -->
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
export default {
  name: "Modal",
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["close"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
  watch: {
    isVisible(val) {
      // Prevent body scroll while modal is open
      document.body.style.overflow = val ? "hidden" : "";
    },
  },
  beforeUnmount() {
    document.body.style.overflow = "";
  },
};
</script>

<style scoped>
/* ── Overlay ─────────────────────────────────────────── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Bottom-sheet on mobile */
  z-index: 1000;
  padding: 0;
}

@media (min-width: 640px) {
  .modal-overlay {
    align-items: center;
    padding: 16px;
  }
}

/* ── Content panel ───────────────────────────────────── */
.modal-content {
  background: #212529;
  border-radius: 24px 24px 0 0;
  padding: 24px 20px 32px;
  width: 100%;
  max-height: 88vh;
  overflow-y: auto;
  position: relative;
  scrollbar-width: thin;
  scrollbar-color: #3a3f47 transparent;

  /* Drag handle decoration on mobile */
  padding-top: 28px;
}

.modal-content::before {
  content: "";
  display: block;
  width: 40px;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  margin: 0 auto 20px;
}

@media (min-width: 640px) {
  .modal-content {
    border-radius: 24px;
    width: 100%;
    max-width: 70rem;
    max-height: 80vh;
    padding: 32px 28px;
  }

  /* Hide drag handle on desktop */
  .modal-content::before {
    display: none;
  }
}

.modal-content::-webkit-scrollbar {
  width: 4px;
}
.modal-content::-webkit-scrollbar-thumb {
  background: #3a3f47;
  border-radius: 4px;
}

/* ── Close button ────────────────────────────────────── */
.modal-close {
  position: absolute;
  top: 14px;
  right: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.06);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8b929e;
  transition: background 180ms ease, color 180ms ease, transform 180ms ease;
  padding: 0;
  flex-shrink: 0;
}

.modal-close svg {
  width: 14px;
  height: 14px;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #f0f2f5;
  transform: rotate(90deg);
}

/* ── Vue <Transition> animations ─────────────────────── */
.modal-enter-active {
  transition: opacity 240ms ease;
}
.modal-leave-active {
  transition: opacity 180ms ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content {
  animation: slideUp 260ms cubic-bezier(0.34, 1.4, 0.64, 1);
}
.modal-leave-active .modal-content {
  animation: slideDown 180ms ease forwards;
}

@keyframes slideUp {
  from { transform: translateY(32px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}

@keyframes slideDown {
  from { transform: translateY(0);    opacity: 1; }
  to   { transform: translateY(24px); opacity: 0; }
}

@media (min-width: 640px) {
  .modal-enter-active .modal-content {
    animation: scaleIn 260ms cubic-bezier(0.34, 1.2, 0.64, 1);
  }
  .modal-leave-active .modal-content {
    animation: scaleOut 180ms ease forwards;
  }

  @keyframes scaleIn {
    from { transform: scale(0.94) translateY(12px); opacity: 0; }
    to   { transform: scale(1)    translateY(0);    opacity: 1; }
  }

  @keyframes scaleOut {
    from { transform: scale(1)    translateY(0);    opacity: 1; }
    to   { transform: scale(0.96) translateY(8px);  opacity: 0; }
  }
}
</style>