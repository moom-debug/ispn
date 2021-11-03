import { mapState } from "vuex";
const currentRecordMixin={
    computed:{
        ...mapState("currentRecord",["name",'record'])
    }
}
export default currentRecordMixin