<template>
  <div class="danwei">
    <p class="colorwhite">element ui tree自定义样式 自定义图标</p>
    <div class="addressx">
      <el-tree
        ref="tree"
        node-key="id"
        :data="data"
        icon-class=" "
        :props="defaultProps"
        :default-expanded-keys="expandedKeys"
        :default-checked-keys="checkedKeys"
        :check-strictly="true"
        @check="handleNodeClick"
      >
        <div class="custom-tree-node" slot-scope="{node, data}">
          <div class="tree-node">
            <contraction v-if="node.childNodes.length>0" :is-expand="node.expanded"></contraction>
            <div class="tree-node-label">
              <icon :type="node.level" :childNodes="node.childNodes.length"></icon>
              <span class="ellipsis" style="user-select:none;" :title="node.label">{{ node.label }}</span>
            </div>
          </div>
        </div>
      </el-tree>
    </div>
  </div>
</template>

<script>
import contraction from './icon/contraction'
import icon from "./icon/icon";

export default {
  name: "danwei",
  components: {contraction, icon},
  props: {
    id: {
      type: String,
      default() {
        return '';
      }
    }
  },
  data() {
    return {
      status: '',
      message: "",
      organizationTree: [],
      checkedKeys: [],
      expandedKeys: [],
      data: [{
        label: '某某单位(1/7)',
        children: [{
          label: '一大队(1/4)',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      },
        {
          label: '某某单位(1/7)',
          children: [{
            label: '一大队(1/4)',
            children: [{
              label: '贵A39233'
            }]
          },
            {
              label: '二大队(1/4)',
              children: [{
                label: '三级 2-2-1'
              }]
            }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
    }
  },
  watch: {},
  mounted() {
  },
  methods: {
    handleNodeClick(data) {
      this.message = data.title;
    },
    treeLeaf(data, node) {
      console.log(data, node)
      return !data.children;
    },
  }
}
</script>

<style lang="scss" scoped>
.danwei {
  ::v-deep {
    /* 设置树形最外层的背景颜色和字体颜色 */
    .el-tree {
      color: #fff;
      background: transparent;
      width: calc(100% - 40px);
      margin-left: 20px;
    }

    /* 设置三角形图标的颜色 */
    .el-tree-node__expand-icon {
      color: #fff;
    }

    /* 设置节点鼠标悬浮三角图标鼠标悬浮的颜色 */
    .el-tree-node__content:hover .el-tree-node__expand-icon {
      color: rgba(0, 164, 255, 1);
    }

    /* .el-tree-node__content:hover .el-tree-node__expand-icon.is-leaf {
      color: transparent;
    } */

    /* 树节点鼠标悬浮式改变背景色，字体颜色 */
    .el-tree-node__content:hover {
      background: none;
      color: rgba(0, 164, 255, 1);
    }

    /* 改变节点高度 */
    .el-tree-node__content {
      height: 36px;
    }

    /* 节点前边的三角图标并不会被节点样式影响，需要单独修改 当前激活的颜色*/
    .el-tree-node:focus
    > .el-tree-node__content
    .el-tree-node__expand-icon {
      color: rgba(39, 114, 229, 1);
    }

    /* 改变被点击节点背景颜色，字体颜色 */
    .el-tree-node:focus > .el-tree-node__content {
      background: none;
      color: rgba(0, 164, 255, 1);
    }
  }
}

.treebody {
  height: calc(100% - 100px);
  width: 100%;
  position: relative;
}

.tree-node {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
}

.tree-node-label {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
}

.ellipsis {
  font-size: 13px;
  font-family: PingFang;
  font-weight: bold;
  color: #8299BF !important;
}
</style>
