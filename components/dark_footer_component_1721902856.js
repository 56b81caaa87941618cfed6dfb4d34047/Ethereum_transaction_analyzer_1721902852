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
        Hello World
      </button>
      <button @click="sayHello" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
        Hello World
      </button>
    </div>
  `
}