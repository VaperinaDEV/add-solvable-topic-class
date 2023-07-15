import discourseComputed from "discourse-common/utils/decorators";
import TopicListItem from "discourse/components/topic-list-item";

export default {
  name: "add-solvable-topic-list-class",
  initialize() {
    TopicListItem.reopen({
      @discourseComputed()
      unboundClassNames() {
        let classList = this._super(...arguments);
        if (this.topic.can_have_answer) {
          classList += " solvable-topic";
        }
        return classList;
      },
    });
  },
};
