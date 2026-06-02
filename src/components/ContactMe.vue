<template>

    <h2>Contact Me</h2>

    <p>
        if you would like to contact me for any reason, you can do so with the form below
    </p>


    <form @submit.prevent="submitForm" class="contact-form">
        <div>
            <label for="name">Name
                <input id="name" v-model="form.name" type="text" required />
            </label>
        </div>

        <div>
            <label for="email">Email
                <input id="email" v-model="form.email" type="email" required />
            </label>
        </div>

        <div>
            <label for="message">Message
                <textarea id="message" v-model="form.message" required></textarea>
            </label>
        </div>

        <button type="submit" :disabled="isLoading">
            {{ isLoading ? 'Sending...' : 'Send Message' }}
        </button>
    </form>
</template>

<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios';

const form = reactive({
    name: '',
    email: '',
    message: ''
});

const isLoading = ref(false);
const statusMessage = ref('');

const submitForm = async () => {
    isLoading.value = true;
    statusMessage.value = '';

    try {
        // Replace with your actual backend endpoint or FormBackend URL
        await axios.post('http://localhost:3333/api/contact-me', form);
        statusMessage.value = 'Message sent successfully!';
        form.name = '';
        form.email = '';
        form.message = '';
    } catch (error) {
        statusMessage.value = 'Failed to send message.';
        console.error(error);
    } finally {
        isLoading.value = false;
    }
};
</script>

<style scoped>
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
}

input,
textarea {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: block;
    max-width: 800px;
    min-width: 400px;
    width: 800px;
}

button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 820px;
}

button:disabled {
    background-color: #ccc;
}
</style>