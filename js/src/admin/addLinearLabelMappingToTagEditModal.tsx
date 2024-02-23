import app from 'flarum/admin/app';
import EditTagModal  from 'flarum/tags/admin/components/EditTagModal';
import {extend} from "flarum/common/extend";
import SelectDropdown from 'flarum/common/components/SelectDropdown';
import Stream from 'flarum/common/utils/Stream';
import Button from 'flarum/common/components/Button';

type LinearLabel = {
    id: string
    name: string
    isGroup: boolean
}

export function addLinearLabelMappingToTagEditModal () {
    let labels: LinearLabel[] = []

    m.request({
        method: "GET",
        url: "/api/linear/teams",
    }).then((response) => {
        labels = response.data.attributes
    })

    extend(EditTagModal.prototype, 'oninit', function () {
        this.linearLabelId = this.tag.data.attributes.linearLabelId
    })

    extend(EditTagModal.prototype, 'fields', function (items) {
        const makeLinearLabelSelect = () => ((
            <SelectDropdown
                buttonClassName="Button Button--inverted"
                defaultLabel={app.translator.trans(`blomstra-linear.admin.tags.fields.linear_label_id.default_select_value`)}
            >
                {labels.map(label => (
                    <Button
                        className="Button"
                        value={label.id}
                        active={this.linearLabelId?.id === label.id}
                        type="button"
                        onclick={() => {
                            this.linearLabelId = label
                        }}
                    >
                        {label.name}
                    </Button>
                ))}
            </SelectDropdown>
        ));

        items.add(
            'linearLabelId',
            <div className="Form-group">
                <label>{app.translator.trans(`blomstra-linear.admin.tags.fields.linear_label_id.label`)}</label>
                {makeLinearLabelSelect()}
            </div>,
            30,
        );
    })

    extend(EditTagModal.prototype, 'submitData', function (data) {
        data.linearLabelId = this.linearLabelId?.id

        return data
    })
}