const App = {
    data() {
        return {
            hiddenInput: false,
            title: "Валя, раз пришла -  давай!",
            input: {
                value: "",
                placeholder: "Text"
            },
            notes: [],
            editIndex: null,
        }
    },
    mounted() {
        this.getNotes();
    },
    watch: {
        notes: {
            handler(val) {
                localStorage.setItem('notes', JSON.stringify(val))
            },
            deep: true,
        }
    },
    methods: {
        getNotes() {
            const localNotes = localStorage.getItem('notes');
            if (localNotes) {
                this.notes = JSON.parse(localNotes);
            }
        },
        onSubmit() {
            if (this.editIndex !== null) {
                this.notes.splice(this.editIndex, 1, this.input.value);
            } else {
                this.notes.push(this.input.value);
            }
            this.resetInput();
        },
        remove(index) {
            this.resetInput();
            this.notes.splice(index, 1);
        },
        update(index) {
            this.hiddenInput = true;
            this.input.value = this.notes[index];
            this.editIndex = index;
        },
        resetInput() {
            this.hiddenInput = false;
            this.input.value = "";
            this.editIndex = null;
        }
    },
    computed: {
        btnName() {
            return this.editIndex !== null ? "Редактировать" : "Сохранить";
        }
    }
}

Vue.createApp(App).mount('#app');