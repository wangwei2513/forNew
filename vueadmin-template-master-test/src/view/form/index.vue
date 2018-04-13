<template>
   <div class="container">
     <el-form :model="formData">
       <el-form-item label="活动名称">
         <el-input v-model="formData.name" placeholder=""></el-input>
       </el-form-item>
       <el-form-item label="活动区域">
         <el-select v-model="formData.place" placeholder="">
           <el-option v-for="place in formData.place" :key="place.id"></el-option>
         </el-select>
       </el-form-item>
       <el-form-item label="活动时间">
         <el-col :span="11">
           <el-time-select v-model="formData.startTime" placeholder="开始时间"></el-time-select>
         </el-col>
         <el-col :span="2">-</el-col>
         <el-col :span="11">
           <el-time-select v-model="formData.endTime" placeholder="结束时间"></el-time-select>
         </el-col>
       </el-form-item>
       <el-form-item label="确认">
         <el-switch v-model="formData.confirm"></el-switch>
       </el-form-item>
       <el-form-item label="活动类型">
         <el-checkbox-group v-model="formData.checked">
           <el-checkbox v-for="check in formData.checkeList" :key="check.id" :label="check"></el-checkbox>
         </el-checkbox-group>
       </el-form-item>
     </el-form>
   </div>
</template>

<script>
export default {};
</script>

<style>

</style>
