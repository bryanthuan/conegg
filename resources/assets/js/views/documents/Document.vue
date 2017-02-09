<template>
  <page-content page-title="Documents">
        <md-table-card>
              <md-toolbar>
                
                  <h2 class="md-title">My Files</h2>
                  <md-button class="md-icon-button">
                  <md-icon>filter_list</md-icon>
                    </md-button>
                <md-button class="md-icon-button">
                  <md-icon>search</md-icon>
                </md-button>
                <md-button class="md-fab md-mini">
                    <md-icon>add</md-icon>
                  </md-button>
                
              </md-toolbar>

              <md-table-alternate-header md-selected-label="selected">
                <md-button class="md-icon-button">
                  <md-icon>delete</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                  <md-icon>more_vert</md-icon>
                </md-button>
              </md-table-alternate-header>

              <md-table md-sort="dessert" md-sort-type="desc" @select="onSelect" @sort="onSort">
                <md-table-header>
                  <md-table-row>
                    <md-table-head md-sort-by="name">Name</md-table-head>
                    <md-table-head md-sort-by="owner" width="100px">Owner</md-table-head>
                    <md-table-head md-sort-by="sharedDate">Shared Date</md-table-head>
                    <md-table-head md-sort-by="size">File size</md-table-head>
                  </md-table-row>
                </md-table-header>

                <md-table-body>
                  <md-table-row v-for="(row, rowIndex) in documents" :key="rowIndex" :md-item="row" md-selection>
                    <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex" :md-numeric="columnIndex !== 'name' && columnIndex !== 'owner' && columnIndex !== 'sharedDate' && columnIndex !== 'size'  ">

                      <span v-if="columnIndex === 'size'">{{ column }}</span>
                      <md-button class="md-icon-button" v-if="columnIndex === 'size'">
                        <md-icon class="icon-view-visible">visibility</md-icon>
                      </md-button>

                      <span v-if="columnIndex === 'name'">
                        <docIcon :fileName="documents[rowIndex].name"></docIcon> {{ column }}
                      </span>

                      <span v-if="columnIndex !== 'size' &&columnIndex !== 'name'">{{ column }}</span>
                    </md-table-cell>
                  </md-table-row>
                </md-table-body>
              </md-table>
            </md-table-card>
  </page-content>
</template>

<style lang="scss">
  .icon-view-visible {
        margin: auto !important;
  }
</style>

<script>
    import docIcon from './docIcon';
    export default {
        components:{
            'docIcon': docIcon,
        },
        methods: {
            onSelect(data) {
                this.selectedData = data;
                this.$forceUpdate();
            },
            onSort(sort) {
                this.sort = sort;
            },
            onPagination(page) {
                this.page = page;
            }
        },
        data: () => ({
            selectedData: [],
            sort: {},
            page: {},
            documents: [
            {
                name: 'Frozen yogurt.pdf',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },
            {
                name: 'Frozen yogurt.docx',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },
            {
                name: 'Frozen yogurt.pdf',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },
            {
                name: 'Consultant 101.docx',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },
            {
                name: 'Frozen yogurt.pdf',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },
            {
                name: 'Frozen yogurt.docx',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },
            {
                name: 'Frozen yogurt.png',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },
            {
                name: 'Frozen yogurt.pdf',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },
            {
                name: 'Frozen yogurt.docx',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },
            {
                name: 'Frozen yogurt.pdf',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },
            {
                name: 'Consultant 101.docx',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },
            {
                name: 'Frozen yogurt.pdf',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },
            {
                name: 'Frozen yogurt.docx',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },
            {
                name: 'Frozen yogurt.png',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },
            {
                name: 'Frozen yogurt.docx',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },
            {
                name: 'Frozen yogurt.png',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },
            {
                name: 'Frozen yogurt.docx',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },
            {
                name: 'Frozen yogurt.png',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },
            {
                name: 'Frozen yogurt.docx',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },
            {
                name: 'Frozen yogurt.png',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },
            {
                name: 'Frozen yogurt.docx',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },
            {
                name: 'Frozen yogurt.png',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },
            {
                name: 'Frozen yogurt.docx',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },
            {
                name: 'Frozen yogurt.png',
                owner: 'Brian Thuan',
                sharedDate: 'Jan 16, 2017',
                size: '6.0',
            },

            
        ],
  })
}
</script>