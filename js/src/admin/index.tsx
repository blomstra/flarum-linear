import app from 'flarum/admin/app';
import {extend} from "flarum/common/extend";
import EditTagModal  from 'flarum/tags/admin/components/EditTagModal';

app.initializers.add('blomstra-linear', () => {
    extend(EditTagModal.prototype, 'fields', (items) => {
        items.add(
            'linear-tag',
            <div className="Form-group">
                <label>LInear Tag</label>
                SELECT DROPDOWN HERE
            </div>,
            50
        );
    })

    app.extensionData
      .for('blomstra-linear')
      .registerSetting(
        {
          setting: 'blomstra-linear.token',
          type: 'password',
          label: app.translator.trans('blomstra-linear.admin.settings.token_label'),
          help: app.translator.trans('blomstra-linear.admin.settings.token_description'),
        }
      )
      .registerSetting(
        {
          setting: 'blomstra-linear.cachettl',
          type: 'number',
          default: 0,
          label: app.translator.trans('blomstra-linear.admin.settings.cachettl_label'),
          help: app.translator.trans('blomstra-linear.admin.settings.cachettl_description'),
        }
      )
      .registerPermission(
        {
          icon: 'fab fa-trello',
          label: app.translator.trans('blomstra-linear.admin.permissions.add_to_linear'),
          permission: 'discussion.addToLinear',
        },
        'start'
      );
    });
    // Make a request to the API to get the teams
    const teams = { null: 'Select a team' };
    m.request({
      method: 'GET',
      url: '/api/linear/teams',
    }).then((response) => {
      response.data.attributes.map((team) => {
        teams[team.id] = team.name;
      });

      if (Object.keys(teams).length > 1) {
        console.log(teams);
        app.extensionData.for('blomstra-linear').registerSetting({
          setting: 'blomstra-linear.default-team',
          type: 'select',
          label: app.translator.trans('blomstra-linear.admin.settings.default_team_label'),
          help: app.translator.trans('blomstra-linear.admin.settings.default_team_description'),
          options: teams,
          default:
            'blomstra-linear.default-team' in app.data.settings &&
            app.data.settings['blomstra-linear.default-team'] !== '' &&
            app.data.settings['blomstra-linear.default-team'] !== null
              ? app.data.settings['blomstra-linear.default-team']
              : null,
        });
      }
    });
  }
});
