const App ={
    data(){
        return{
          timon: 1,
          title:'',
          title1: '',
          title2: '',
         
        }
        },
       methods:{
         nextStep(){
           this.timon++
         },
         onSubmit(){
          console.log('Registered:',this.title,this.title1,this.title2)
          this.title= '',
         this.title1='',
         this.title2=''
          }
        } 
       
        }

const app = Vue.createApp(App)
app.mount('#app')