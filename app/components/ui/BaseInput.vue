<template>
  <div
    :class="['wrapper', props.isError ? 'hasError' : '']"
    :style="{
      '--input-bg': props.inputBackground,
      '--input-color': props.inputColor,
      '--input-font-size': props.inputFontSize,
      '--input-border-radius': props.inputBorderRadius,
      '--input-border-color': props.inputBorderColor,
    }"
  >
    <div class="wrapper-input">
      <input
        :id="inputId"
        :value="inputValue"
        ref="inputRef"
        @focus="onFocus"
        @blur="onBlur"
        :type="typeInput"
        :placeholder="placeHoder"
        @input="onInput"
        :class="{
          'error-input': props.isError,
          isPassword: props.type === 'password',
        }"
      />
      <UTooltip
        arrow
        :text="props.message"
        :delay-duration="0"
        :content="{
          align: 'center',
          side: 'top',
          sideOffset: 1,
        }"
        :ui="{
          content: 'bg-red-500 text-white text-xs p-2 rounded-md',
        }"
      >
        <span v-if="props.isError" class="icon-error">
          <Icon name="fa-solid:exclamation-triangle" />
        </span>
      </UTooltip>
    </div>
    <label class="label-input" :for="inputId">{{ props.name }}</label>
    <button
      v-if="props.type === 'password' && inputValue !== ''"
      :class="
        showPasswordVisibilityButton ? 'btn-password active' : 'btn-password'
      "
      @click="togglePasswordVisibility"
    >
      <Icon
        name="fa6-solid:eye"
        :class="!showPassword && showPasswordVisibilityButton ? 'active' : ''"
      />
      <Icon
        name="fa6-solid:eye-slash"
        :class="showPassword && showPasswordVisibilityButton ? 'active' : ''"
      />
    </button>
    <button
      :class="showResetButton ? 'btn-reset active' : 'btn-reset'"
      @click="onReset"
    >
      <Icon name="fa6-solid:xmark" />
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  showButtonReset: {
    type: Boolean,
    default: false,
  },
  showButtonPassword: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: "",
  },
  message: {
    type: String,
    default: "",
  },
  isError: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "text",
  },
  placeHolder: {
    type: String,
    default: "Enter your input here",
  },
  inputBackground: {
    type: String,
    default: "#f5f5f5",
  },
  inputColor: {
    type: String,
    default: "#5d5d5d",
  },
  inputFontSize: {
    type: String,
    default: "16px",
  },
  inputBorderRadius: {
    type: String,
    default: "5px",
  },
  inputBorderColor: {
    type: String,
    default: "#000",
  },
});

let debounceTimer: number | undefined;
const placeHoder = ref(" ");
const inputValue = ref(props.modelValue);
const showPassword = ref(props.type === "password" ? false : true);
const inputRef = ref<HTMLInputElement | null>(null)

const showResetButton = computed(
  () => props.showButtonReset && inputValue.value !== "",
);

const inputId = computed(
  () => props.name.trim().toLowerCase().replace(/\s+/g, "-") || "base-input",
);
const typeInput = computed(() => {
  if (props.type === "password") {
    return showPassword.value ? "text" : "password";
  }
  return props.type;
});

const onFocus = () => {
  setTimeout(() => {
    placeHoder.value = props.placeHolder;
  }, 100);
};

const onBlur = () => {
  if (inputValue.value === "") placeHoder.value = "";
};

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  inputValue.value = target.value;

  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(() => {
    emit("update:modelValue", inputValue.value);
  }, 400);
};

const onReset = () => {
  inputValue.value = "";
  placeHoder.value = "";
  emit("update:modelValue", inputValue.value);
  nextTick(() => {
    const inputElement = document.getElementById(
      inputId.value,
    ) as HTMLInputElement;
    inputElement.focus();
  });
};

const showPasswordVisibilityButton = computed(
  () => props.showButtonPassword && inputValue.value !== "",
);

const togglePasswordVisibility = () => {
  if (props.type === "password") {
    showPassword.value = !showPassword.value;
  }
};

onMounted(() => {
  console.log(inputRef.value);
  
  inputRef.value?.focus;
})
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  background-color: var(--input-bg);
  position: relative;
  width: auto;
  height: fit-content;
  padding: 10px;
  border-radius: var(--input-border-radius);
}

.wrapper label {
  position: absolute;
  top: 20px;
  left: 10%;
  background: var(--input-bg);
  color: var(--input-color);
  font-size: var(--input-font-size);
  text-align: start;
  transition: all 0.3s ease-in-out;
  border-radius: var(--input-border-radius);
}

.wrapper > .wrapper-input > input {
  width: calc(100%);
  color: var(--input-color);
  padding: 8px 15px 8px 8px;
  background: var(--input-bg);
  font-size: var(--input-font-size);
  border-radius: var(--input-border-radius);
  border: 1px solid var(--input-border-color);
}

.wrapper > .wrapper-input > .isPassword {
  padding-right: 40px;
}

.wrapper:focus-within > .label-input,
.wrapper:has(.wrapper-input > input:not(:placeholder-shown)) > .label-input {
  top: 0;
  padding: 0 5px;
  color: var(--input-border-color);
}

.wrapper .btn-reset,
.wrapper .btn-password {
  top: 50%;
  right: 0%;
  opacity: 0;
  padding: 0;
  width: 18px;
  height: 18px;
  border: none;
  display: flex;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  align-items: center;
  justify-content: center;
  color: var(--input-color);
  background: transparent;
  transform: translate(-10%, -50%);
  transition:
    transform 0.5s ease,
    opacity 0.2s ease,
    background 0.2s ease,
    color 1s ease;
  font-size: var(--input-font-size);
}

.wrapper .btn-reset.active:hover {
  background: #e67a7a;
  opacity: 1;
  color: #fa0101;
  transform: translate(-10%, -50%) rotate(360deg);
}

.wrapper .btn-reset > span {
  font-size: 10px;
  pointer-events: none;
}

.wrapper .btn-password > span {
  font-size: 10px;
  pointer-events: none;
}

.wrapper .btn-reset.active {
  opacity: 1;
  background: var(--input-bg);
  transform: translate(-10%, -50%) rotate(90deg);
}

.wrapper .btn-password.active {
  opacity: 1;
  background: var(--input-bg);
  transform: translate(-25px, -50%);
  position: absolute;
}

.wrapper .btn-password.active span {
  opacity: 0;
  transition:
    transform 0.5s ease,
    opacity 0.2s ease;
  position: absolute;
}

.wrapper .btn-password.active span.active {
  opacity: 1;
  transform: rotate(360deg);
}

.wrapper > .wrapper-input > input.error-input {
  border-color: #ff0000;
  outline: none;
  width: 100%;
}

.wrapper > .wrapper-input > input.error-input::placeholder {
  color: #ff0000a0;
}

.wrapper:has(.error-input) > .label-input {
  color: #ff0000;
}

.wrapper-input:has(.error-input) {
  width: calc(100% - 20px);
}

.wrapper.hasError > .btn-reset {
  right: 20px;
}

.wrapper.hasError > .btn-password {
  right: 20px;
}

.icon-error {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  color: #ff0000;
  font-size: 12px;
  cursor: pointer;
}

input[type="password"]::-ms-reveal,
input[type="password"]::-ms-clear {
  display: none;
}
</style>
