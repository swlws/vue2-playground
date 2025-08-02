<script>
import AllFormComponents from '../form-component/index.js';
import { createFormElement } from './create-form-element.js';

export default {
  name: 'TfNodeRender',
  components: {
    ...AllFormComponents,
  },
  props: {
    nodeData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  render() {
    return (
      <div class="tf-node-render">{createFormElement(this, this.nodeData)}</div>
    );
  },
};
</script>
