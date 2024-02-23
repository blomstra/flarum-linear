import app from 'flarum/admin/app';
import EditTagModal  from 'flarum/tags/admin/components/EditTagModal';
import {extend} from "flarum/common/extend";
import SelectDropdown from 'flarum/common/components/SelectDropdown';
import Button from 'flarum/common/components/Button';

export function addLinearLabelMappingToTagEditModal () {
    let selectedLabel = null

    let labels = []

    m.request({
        method: "GET",
        url: "/api/linear/teams",
    }).then((response) => {
        labels = response.data.attributes
    })

    const makeLinearLabelSelect = () => ((
        <SelectDropdown
            buttonClassName="Button Button--inverted"
            defaultLabel={app.translator.trans(`blomstra-linear.admin.tags.fields.linear_label_id.default_select_value`)}
        >
            {labels.map(label => (
                <Button
                    className="Button"
                    value={label.id}
                    active={selectedLabel === label.id}
                    type="button"
                    onclick={() => {
                        selectedLabel = label.id
                    }}
                >
                    {label.name}
                </Button>
            ))}
        </SelectDropdown>
    ));

    extend(EditTagModal.prototype, 'fields', (items) => {
        items.add(
            'linear-tag',
            <div className="Form-group">
                <label>{app.translator.trans(`blomstra-linear.admin.tags.fields.linear_label_id.label`)}</label>
                {makeLinearLabelSelect()}
            </div>,
            30,
        );
    })
}