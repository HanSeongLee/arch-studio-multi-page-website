module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-max-length': [2, 'always', 100],
        'body-leading-blank': [2, 'always'],
        'body-max-line-length': [1, 'always', 100],
        'body-max-length': [1, 'always', 400],
        'footer-leading-blank': [2, 'always'],
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'style',
                'chore',
                'ci',
                'refactor',
                'revert',
                'test',
                'remove',
                'move',
                'docs',
                'perf',
            ],
        ],
    },
};
