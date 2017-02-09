<template>
    <md-icon md-theme="default" :class="classs">{{icon}}</md-icon>
</template>

<script>
    export default {
        props: ['fileName'],
        data: function () {
                let ext = this.fileName.substr(this.fileName.lastIndexOf('.') + 1);
                let icon='';
                let classs ='';
                
                if(['PDF','pdf'].indexOf(ext)>-1){
                    icon= 'picture_as_pdf';
                    classs='md-warn';
                }
                if(['doc','docx','DOC','DOCX'].indexOf(ext)>-1){
                    icon= 'insert_drive_file';
                    classs='md-primary';
                }

                if(['png','jpg','PNG','JPG'].indexOf(ext)>-1){
                    icon= 'photo';
                    classs='';
                }
                return {icon:icon,classs:classs}
        }
    }
</script>