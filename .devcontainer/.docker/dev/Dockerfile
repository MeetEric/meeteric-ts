FROM node-dev-container-base

# Avoid warnings by switching to noninteractive
ENV DEBIAN_FRONTEND=noninteractive

ARG TF_VERSION=0.14.7
ARG TFLINT_VERSION=0.24.1
ARG TFLINT_AZURE_RULESET_VERSION=0.9.0

# Configure apt and install packages
RUN \
    # Update Azure CLI
    curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash \
    # Install Terraform
    && mkdir -p /tmp/docker-downloads \
    && curl -sSL -o /tmp/docker-downloads/terraform.zip https://releases.hashicorp.com/terraform/${TF_VERSION}/terraform_${TF_VERSION}_linux_amd64.zip \
    && unzip /tmp/docker-downloads/terraform.zip -d /usr/local/bin \
    && curl -sSL -o /tmp/docker-downloads/tflint.zip https://github.com/terraform-linters/tflint/releases/download/v${TFLINT_VERSION}/tflint_linux_amd64.zip \
    && unzip /tmp/docker-downloads/tflint.zip -d /usr/local/bin \
    && curl -sSL -o /tmp/docker-downloads/tflint_azure.zip https://github.com/terraform-linters/tflint-ruleset-azurerm/releases/download/v0.9.0/tflint-ruleset-azurerm_linux_amd64.zip \
    && mkdir -p /root/.tflint.d/plugins \
    && unzip /tmp/docker-downloads/tflint_azure.zip -d /root/.tflint.d/plugins \
    && cd ~ \
    && rm -rf /tmp/docker-downloads \
    # Clean up
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

# Switch back to dialog for any ad-hoc use of apt-get
ENV DEBIAN_FRONTEND=dialog

# Copy our custom bashrc to the devcontainer for git colorization, aliases, etc.
COPY .bashrc /root/.bashrc
