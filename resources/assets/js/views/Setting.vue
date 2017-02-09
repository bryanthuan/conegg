<template>
  <page-content page-title="Setting">
    <div class="main-content">
    
        <md-list>
            <md-list-item>
            <md-icon>move_to_inbox</md-icon> <span>Inbox</span>
            <md-switch v-model="checked0" id="my-test0" md-theme="light-blue" name="my-testO" class="md-primary"></md-switch> 
            </md-list-item>

            <md-list-item>
            <md-icon>send</md-icon> <span>Sent Mail</span>
            <md-switch v-model="checked1" id="my-test1" name="my-test1" class="md-primary"></md-switch> 
            </md-list-item>

            <md-list-item>
            <md-icon>delete</md-icon> <span>Trash</span>
            <md-switch v-model="checked2" id="my-test2" name="my-test2" class="md-primary"></md-switch> 
            </md-list-item>

            <md-list-item>
            <md-icon>error</md-icon> <span>Spam</span>
            <md-switch v-model="checked2" id="my-test3" name="my-test3" class="md-primary"></md-switch> 

            <md-divider class="md-inset"></md-divider>
            </md-list-item>

            <md-list-item>
            <md-avatar>
                <img src="https://placeimg.com/40/40/people/5" alt="People">
            </md-avatar>

            <span>Abbey Christansen</span>

            <md-button class="md-icon-button md-list-action">
                <md-icon class="md-primary">chat_bubble</md-icon>
            </md-button>
            </md-list-item>

            <md-list-item>
            <md-avatar>
                <img src="https://placeimg.com/40/40/people/1" alt="People">
            </md-avatar>

            <span>Alex Nelson</span>

            <md-button class="md-icon-button md-list-action">
                <md-icon class="md-primary">chat_bubble</md-icon>
            </md-button>
            </md-list-item>

            <md-list-item>
            <md-avatar>
                <img src="https://placeimg.com/40/40/people/6" alt="People">
            </md-avatar>

            <span>Mary Johnson</span>

            <md-button class="md-icon-button md-list-action">
                <md-icon>chat_bubble</md-icon>
            </md-button>
            </md-list-item>
        </md-list>
        
    </div>
  </page-content>
</template>