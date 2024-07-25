export default {
  data() {
    return {}
  },
  methods: {
    // sayHello method start
    sayHello() {
      console.log('hello world')
    }
    // sayHello method end
  },
  template: `
    <div class="p-5">
      <button @click="sayHello" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Hello World
      </button>
    </div>
  `
}