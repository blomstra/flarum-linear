import app from 'flarum/admin/app';

app.initializers.add('blomstra-linear', () => {
  app.extensionData
    .for('blomstra-linear')
    .registerSetting(
      {
        setting: 'blomstra-linear.token',
        type: 'text',
        label: app.translator.trans('blomstra-linear.admin.settings.token_label'),
        help: app.translator.trans('blomstra-linear.admin.settings.token_description'),
      }
    )
});
